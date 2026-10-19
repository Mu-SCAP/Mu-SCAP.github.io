(function () {
  "use strict";

  const data = window.SCAP_DEMOS || {};

  const SYSTEMS = [
    { id: "base", name: "Base", cond: "free-form prompt" },
    { id: "transcribe", name: "Transcribe only", cond: "partial SCAP" },
    { id: "ours", name: "Transcribe + Infer", cond: "full SCAP", ours: true },
  ];

  const METRICS = [
    { id: "clap", label: "CLAP", digits: 3 },
    { id: "dsg", label: "DSG", digits: 3 },
    { id: "muq", label: "MuQ", digits: 2 },
  ];

  const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);
  const fmt = (value, digits) => Number(value).toFixed(digits);
  const pad = (n) => String(n).padStart(2, "0");
  const clamp01 = (x) => Math.min(Math.max(x, 0), 1);

  // Ties are resolved on the displayed (rounded) values.
  function bestFlags(values, digits) {
    const shown = values.map((v) => Number(fmt(v, digits)));
    const max = Math.max(...shown);
    return shown.map((v) => v === max);
  }

  function systemFigure(example, system, number, best) {
    const tag = system.ours ? ' <span class="tag">ours</span>' : "";
    const scores = METRICS.map((m) => {
      const cls = best[m.id][system.id] ? ' class="best"' : "";
      return `<div><dt>${m.label}</dt><dd${cls}>${fmt(example.metrics[system.id][m.id], m.digits)}</dd></div>`;
    }).join("");
    return `
      <figure class="system" data-system="${system.id}">
        <figcaption class="system-label">
          <span class="system-name">${system.name}${tag}</span>
          <span class="system-cond">${system.cond}</span>
        </figcaption>
        <div class="spec" title="Click to play from here">
          <img src="${esc(example.spectrogram[system.id])}" width="640" height="220" loading="lazy" decoding="async"
               alt="Mel spectrogram of the ${system.name} clip, example ${number}">
          <span class="playhead"></span>
        </div>
        <audio controls preload="none" src="${esc(example.audio[system.id])}" aria-label="${system.name}, example ${number}"></audio>
        <dl class="scores">${scores}</dl>
      </figure>`;
  }

  function scapPanel(example) {
    const list = (items, render) =>
      items.length ? items.map(render).join(", ") : '<span class="empty">&mdash;</span>';
    const rows = example.scap.map((row) => `
      <tr>
        <th scope="row"><code>${esc(row.field)}</code></th>
        <td>${list(row.partial, (v) => `<span class="t">${esc(v)}</span>`)}</td>
        <td>${list(row.full, (v) => `<span class="${v.inferred ? "i" : "t"}">${esc(v.text)}</span>`)}</td>
      </tr>`).join("");
    return `
      <details class="panel">
        <summary>Structured captions (SCAPs)
          <span class="color-key"><span class="t">from Transcribe</span><span class="i">added by Infer</span></span>
        </summary>
        <div class="panel-body">
          <table class="scap-table">
            <thead><tr>
              <th scope="col">Field</th>
              <th scope="col">Partial SCAP (Transcribe only)</th>
              <th scope="col">Full SCAP (Transcribe + Infer)</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </details>`;
  }

  function dsgPanel(example) {
    const dsg = example.dsg;
    const rows = dsg.questions.map((q) => {
      const deps = q.deps.length
        ? ` <span class="dep">(depends on ${q.deps.map((d) => "Q" + d).join(", ")})</span>`
        : "";
      const cells = SYSTEMS.map((s) => {
        const a = q.answers[s.id];
        const detector = q.kind === "detector";
        const label = detector ? esc(a.detected) : a.yes ? "Yes" : "No";
        const cls = detector ? "ans" : a.yes ? "ans yes" : "ans no";
        const width = (clamp01(a.conf) * 100).toFixed(1);
        return `<td data-system="${s.id}" data-label="${s.name}"><div class="${cls}"><b>${label}</b><span>${fmt(a.conf, 3)}</span></div>` +
          `<div class="bar"><i style="width:${width}%"></i></div></td>`;
      }).join("");
      return `<tr><th scope="row"><span class="qid">Q${q.id}</span>${esc(q.text)}${deps} ` +
        `<span class="qtype">${esc(q.type)}</span></th>${cells}</tr>`;
    }).join("");

    const flags = bestFlags(SYSTEMS.map((s) => dsg.scores[s.id]), 3);
    const totals = SYSTEMS.map((s, k) =>
      `<td data-system="${s.id}" data-label="${s.name}"${flags[k] ? ' class="best"' : ""}>${fmt(dsg.scores[s.id], 3)}</td>`).join("");

    const detectorTypes = new Set(dsg.questions.filter((q) => q.kind === "detector").map((q) => q.type));
    let note = "Each cell shows the answer and the confidence of \u201cyes\u201d";
    if (detectorTypes.size === 1 && detectorTypes.has("bpm")) {
      note += "; tempo rows show the detected BPM and its graded score.";
    } else if (detectorTypes.size) {
      note += "; rows with a detected value show the detector output and its graded score.";
    } else {
      note += ".";
    }

    return `
      <details class="panel">
        <summary>Music DSG checks</summary>
        <div class="panel-body">
          <table class="dsg-table">
            <thead><tr><th scope="col">Question</th>${SYSTEMS.map((s) => `<th scope="col">${s.name}</th>`).join("")}</tr></thead>
            <tbody>${rows}</tbody>
            <tfoot><tr><th scope="row">Music DSG score</th>${totals}</tr></tfoot>
          </table>
          <p class="table-note">${note}</p>
        </div>
      </details>`;
  }

  function exampleArticle(example, index, section) {
    const number = pad(index + 1);
    const best = {};
    METRICS.forEach((m) => {
      const flags = bestFlags(SYSTEMS.map((s) => example.metrics[s.id][m.id]), m.digits);
      best[m.id] = {};
      SYSTEMS.forEach((s, k) => { best[m.id][s.id] = flags[k]; });
    });
    return `
      <article class="example" id="${section}-${number}">
        <p class="kicker">Example ${number}</p>
        <blockquote class="prompt">\u201c${esc(example.prompt)}\u201d</blockquote>
        <div class="systems">${SYSTEMS.map((s) => systemFigure(example, s, number, best)).join("")}</div>
        ${scapPanel(example)}
        ${example.dsg ? dsgPanel(example) : ""}
      </article>`;
  }

  function mount(id, examples, section) {
    const root = document.getElementById(id);
    if (!root) return;
    if (!Array.isArray(examples) || !examples.length) {
      root.innerHTML = '<p class="intro">The audio examples could not be loaded.</p>';
      return;
    }
    root.innerHTML = examples.map((ex, i) => exampleArticle(ex, i, section)).join("");
  }

  mount("cherry-list", data.cherry, "cherry");
  mount("additional-list", data.additional, "additional");

  // Only one clip plays at a time.
  document.addEventListener("play", (event) => {
    document.querySelectorAll("audio, video").forEach((media) => {
      if (media !== event.target && !media.paused) media.pause();
    });
  }, true);

  // Playhead over each spectrogram; clicking the spectrogram seeks there.
  document.querySelectorAll(".system").forEach((figure) => {
    const audio = figure.querySelector("audio");
    const spec = figure.querySelector(".spec");
    const head = figure.querySelector(".playhead");
    let frame = 0;
    let pendingSeek = null;

    const ready = () => Number.isFinite(audio.duration) && audio.duration > 0;
    const draw = () => {
      if (ready()) head.style.left = `${(audio.currentTime / audio.duration) * 100}%`;
    };
    const tick = () => {
      draw();
      frame = requestAnimationFrame(tick);
    };

    audio.addEventListener("loadedmetadata", () => {
      if (pendingSeek !== null) {
        audio.currentTime = pendingSeek * audio.duration;
        pendingSeek = null;
      }
      draw();
    });
    audio.addEventListener("play", () => {
      spec.classList.add("is-active");
      cancelAnimationFrame(frame);
      tick();
    });
    audio.addEventListener("pause", () => {
      cancelAnimationFrame(frame);
      draw();
    });
    audio.addEventListener("seeked", draw);
    audio.addEventListener("ended", () => {
      cancelAnimationFrame(frame);
      spec.classList.remove("is-active");
      head.style.left = "0";
    });

    spec.addEventListener("click", (event) => {
      const rect = spec.getBoundingClientRect();
      const frac = clamp01((event.clientX - rect.left) / rect.width);
      spec.classList.add("is-active");
      if (ready()) {
        audio.currentTime = frac * audio.duration;
        draw();
      } else {
        pendingSeek = frac;
      }
      // play() stays inside the click handler so mobile browsers allow it.
      const playing = audio.play();
      if (playing && typeof playing.catch === "function") playing.catch(() => {});
    });
  });

  // Copy BibTeX.
  const copyButton = document.getElementById("copy-bibtex");
  const code = document.getElementById("bibtex-code");
  if (copyButton && code) {
    copyButton.addEventListener("click", async () => {
      let ok = false;
      try {
        await navigator.clipboard.writeText(code.textContent);
        ok = true;
      } catch (_) {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        try { ok = document.execCommand("copy"); } catch (__) { ok = false; }
        if (ok) selection.removeAllRanges();
      }
      copyButton.textContent = ok ? "Copied" : "Press Ctrl/\u2318+C";
      setTimeout(() => { copyButton.textContent = "Copy"; }, 1800);
    });
  }

  // Placeholder links (e.g. the arXiv button before the preprint is public).
  document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });
})();
