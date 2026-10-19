/* Generated file: example metadata for the audio demo page. */
window.SCAP_DEMOS = {
 "cherry": [
  {
   "prompt": "Classical symphony, sounding like someone is doing something hastily",
   "audio": {
    "base": "assets/examples/cherry/01/base.mp3",
    "transcribe": "assets/examples/cherry/01/transcribe.mp3",
    "ours": "assets/examples/cherry/01/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/cherry/01/base.jpg",
    "transcribe": "assets/examples/cherry/01/transcribe.jpg",
    "ours": "assets/examples/cherry/01/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.066,
     "dsg": 0.0019,
     "muq": 4.245
    },
    "transcribe": {
     "clap": 0.1871,
     "dsg": 0.5357,
     "muq": 3.057
    },
    "ours": {
     "clap": 0.1991,
     "dsg": 0.9456,
     "muq": 4.375
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "classical symphony"
     ],
     "full": [
      {
       "text": "classical symphony",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "hasty",
       "inferred": true
      },
      {
       "text": "urgent",
       "inferred": true
      },
      {
       "text": "frantic",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "C minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "140",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "string section",
       "inferred": true
      },
      {
       "text": "flute",
       "inferred": true
      },
      {
       "text": "trumpet",
       "inferred": true
      },
      {
       "text": "timpani",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "classical",
      "symphony",
      "urgent",
      "hurried",
      "orchestral",
      "dramatic",
      "cinematic",
      "tense"
     ],
     "full": [
      {
       "text": "classical",
       "inferred": false
      },
      {
       "text": "symphony",
       "inferred": false
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "urgent",
       "inferred": false
      },
      {
       "text": "frantic",
       "inferred": true
      },
      {
       "text": "string section",
       "inferred": true
      },
      {
       "text": "brass",
       "inferred": true
      },
      {
       "text": "percussion",
       "inferred": true
      }
     ]
    }
   ],
   "dsg": {
    "questions": [
     {
      "id": 1,
      "text": "Is the genre classical symphony?",
      "type": "genre",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.001
       },
       "transcribe": {
        "yes": true,
        "conf": 0.731
       },
       "ours": {
        "yes": true,
        "conf": 0.94
       }
      }
     },
     {
      "id": 2,
      "text": "Is the overall mood frantic?",
      "type": "mood",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.002
       },
       "transcribe": {
        "yes": true,
        "conf": 0.651
       },
       "ours": {
        "yes": true,
        "conf": 0.94
       }
      }
     },
     {
      "id": 3,
      "text": "Is the overall mood hurried?",
      "type": "mood",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.005
       },
       "transcribe": {
        "yes": false,
        "conf": 0.029
       },
       "ours": {
        "yes": true,
        "conf": 0.963
       }
      }
     }
    ],
    "scores": {
     "base": 0.0019,
     "transcribe": 0.5357,
     "ours": 0.9456
    }
   }
  },
  {
   "prompt": "A post-rock song for listening as a teenager.",
   "audio": {
    "base": "assets/examples/cherry/02/base.mp3",
    "transcribe": "assets/examples/cherry/02/transcribe.mp3",
    "ours": "assets/examples/cherry/02/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/cherry/02/base.jpg",
    "transcribe": "assets/examples/cherry/02/transcribe.jpg",
    "ours": "assets/examples/cherry/02/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2227,
     "dsg": 0.0086,
     "muq": 4.0
    },
    "transcribe": {
     "clap": 0.2608,
     "dsg": 0.3487,
     "muq": 3.823
    },
    "ours": {
     "clap": 0.352,
     "dsg": 0.9466,
     "muq": 4.146
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "post-rock"
     ],
     "full": [
      {
       "text": "post-rock",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "atmospheric",
       "inferred": true
      },
      {
       "text": "introspective",
       "inferred": true
      },
      {
       "text": "melancholic",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "A minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "90",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "electric guitar",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "post-rock",
      "teenage",
      "listening"
     ],
     "full": [
      {
       "text": "atmospheric",
       "inferred": true
      },
      {
       "text": "introspective",
       "inferred": true
      },
      {
       "text": "melancholic",
       "inferred": true
      },
      {
       "text": "post-rock",
       "inferred": false
      },
      {
       "text": "electric guitar",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "drums",
       "inferred": true
      },
      {
       "text": "teenage",
       "inferred": false
      }
     ]
    }
   ],
   "dsg": {
    "questions": [
     {
      "id": 1,
      "text": "Is the genre post-rock?",
      "type": "genre",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.009
       },
       "transcribe": {
        "yes": false,
        "conf": 0.349
       },
       "ours": {
        "yes": true,
        "conf": 0.947
       }
      }
     }
    ],
    "scores": {
     "base": 0.0086,
     "transcribe": 0.3487,
     "ours": 0.9466
    }
   }
  },
  {
   "prompt": "this electronic song with a downtempo of synthy beats feels perfect for a car journey through nature",
   "audio": {
    "base": "assets/examples/cherry/03/base.mp3",
    "transcribe": "assets/examples/cherry/03/transcribe.mp3",
    "ours": "assets/examples/cherry/03/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/cherry/03/base.jpg",
    "transcribe": "assets/examples/cherry/03/transcribe.jpg",
    "ours": "assets/examples/cherry/03/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2501,
     "dsg": 0.3672,
     "muq": 4.021
    },
    "transcribe": {
     "clap": 0.3246,
     "dsg": 0.666,
     "muq": 3.385
    },
    "ours": {
     "clap": 0.3603,
     "dsg": 0.9909,
     "muq": 3.708
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "electronic"
     ],
     "full": [
      {
       "text": "electronic",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "downtempo",
       "inferred": true
      },
      {
       "text": "relaxed",
       "inferred": true
      },
      {
       "text": "atmospheric",
       "inferred": true
      },
      {
       "text": "scenic",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "low",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "C\u266f minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "90",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "synthy beats"
     ],
     "full": [
      {
       "text": "synthesizer",
       "inferred": true
      },
      {
       "text": "shaker",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "electronic",
      "synthy beats",
      "downtempo",
      "car journey",
      "nature"
     ],
     "full": [
      {
       "text": "atmospheric electronic",
       "inferred": true
      },
      {
       "text": "low-energy",
       "inferred": true
      },
      {
       "text": "relaxed",
       "inferred": true
      },
      {
       "text": "synthesizer",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      },
      {
       "text": "shaker",
       "inferred": true
      },
      {
       "text": "scenic",
       "inferred": true
      },
      {
       "text": "nature",
       "inferred": false
      }
     ]
    }
   ],
   "dsg": {
    "questions": [
     {
      "id": 1,
      "text": "Is there a synth beat?",
      "type": "presence",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.932
       },
       "transcribe": {
        "yes": true,
        "conf": 0.998
       },
       "ours": {
        "yes": true,
        "conf": 0.984
       }
      }
     },
     {
      "id": 2,
      "text": "Is the genre electronic?",
      "type": "genre",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.107
       },
       "transcribe": {
        "yes": true,
        "conf": 1.0
       },
       "ours": {
        "yes": true,
        "conf": 0.997
       }
      }
     },
     {
      "id": 3,
      "text": "Is the tempo downtempo?",
      "type": "bpm",
      "deps": [],
      "kind": "detector",
      "answers": {
       "base": {
        "yes": false,
        "detected": "108 BPM",
        "conf": 0.063
       },
       "transcribe": {
        "yes": false,
        "detected": "152 BPM",
        "conf": 0.0
       },
       "ours": {
        "yes": false,
        "detected": "91 BPM",
        "conf": 0.991
       }
      }
     }
    ],
    "scores": {
     "base": 0.3672,
     "transcribe": 0.666,
     "ours": 0.9909
    }
   }
  },
  {
   "prompt": "Lounge music for a summer evening on the beach.",
   "audio": {
    "base": "assets/examples/cherry/04/base.mp3",
    "transcribe": "assets/examples/cherry/04/transcribe.mp3",
    "ours": "assets/examples/cherry/04/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/cherry/04/base.jpg",
    "transcribe": "assets/examples/cherry/04/transcribe.jpg",
    "ours": "assets/examples/cherry/04/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2771,
     "dsg": 0.2451,
     "muq": 4.458
    },
    "transcribe": {
     "clap": 0.376,
     "dsg": 0.7549,
     "muq": 3.422
    },
    "ours": {
     "clap": 0.4391,
     "dsg": 0.9903,
     "muq": 3.953
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "lounge music"
     ],
     "full": [
      {
       "text": "lounge music",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "relaxed",
       "inferred": true
      },
      {
       "text": "chill",
       "inferred": true
      },
      {
       "text": "serene",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "low",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "C major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "90",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "shaker",
       "inferred": true
      },
      {
       "text": "acoustic guitar",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "lounge",
      "summer",
      "beach",
      "evening",
      "chill",
      "relaxing",
      "tropical",
      "ambient"
     ],
     "full": [
      {
       "text": "lounge",
       "inferred": false
      },
      {
       "text": "relaxed",
       "inferred": true
      },
      {
       "text": "serene",
       "inferred": true
      },
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "acoustic guitar",
       "inferred": true
      },
      {
       "text": "summer",
       "inferred": false
      },
      {
       "text": "beach",
       "inferred": false
      }
     ]
    }
   ],
   "dsg": {
    "questions": [
     {
      "id": 1,
      "text": "Is the genre lounge music?",
      "type": "genre",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.245
       },
       "transcribe": {
        "yes": true,
        "conf": 0.755
       },
       "ours": {
        "yes": true,
        "conf": 0.99
       }
      }
     }
    ],
    "scores": {
     "base": 0.2451,
     "transcribe": 0.7549,
     "ours": 0.9903
    }
   }
  },
  {
   "prompt": "Metal song that could be played in a motorway bar full of rough-looking bikers.",
   "audio": {
    "base": "assets/examples/cherry/05/base.mp3",
    "transcribe": "assets/examples/cherry/05/transcribe.mp3",
    "ours": "assets/examples/cherry/05/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/cherry/05/base.jpg",
    "transcribe": "assets/examples/cherry/05/transcribe.jpg",
    "ours": "assets/examples/cherry/05/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.3055,
     "dsg": 0.5777,
     "muq": 3.219
    },
    "transcribe": {
     "clap": 0.3661,
     "dsg": 0.862,
     "muq": 3.615
    },
    "ours": {
     "clap": 0.4493,
     "dsg": 0.9989,
     "muq": 3.958
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "metal"
     ],
     "full": [
      {
       "text": "metal",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "rough",
       "inferred": true
      },
      {
       "text": "aggressive",
       "inferred": true
      },
      {
       "text": "tough",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "E minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "140",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "electric guitar",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "metal",
      "biker",
      "bar",
      "rough",
      "aggressive",
      "heavy",
      "motorway",
      "outdoor"
     ],
     "full": [
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "aggressive",
       "inferred": false
      },
      {
       "text": "metal",
       "inferred": false
      },
      {
       "text": "electric guitar",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "motorway",
       "inferred": false
      },
      {
       "text": "biker",
       "inferred": false
      }
     ]
    }
   ],
   "dsg": {
    "questions": [
     {
      "id": 1,
      "text": "Is the genre metal?",
      "type": "genre",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.165
       },
       "transcribe": {
        "yes": true,
        "conf": 0.731
       },
       "ours": {
        "yes": true,
        "conf": 0.999
       }
      }
     },
     {
      "id": 2,
      "text": "Is the overall mood rough?",
      "type": "mood",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.996
       },
       "transcribe": {
        "yes": true,
        "conf": 0.995
       },
       "ours": {
        "yes": true,
        "conf": 0.998
       }
      }
     },
     {
      "id": 3,
      "text": "Is the overall mood aggressive?",
      "type": "mood",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.986
       },
       "transcribe": {
        "yes": true,
        "conf": 0.99
       },
       "ours": {
        "yes": true,
        "conf": 0.999
       }
      }
     }
    ],
    "scores": {
     "base": 0.5777,
     "transcribe": 0.862,
     "ours": 0.9989
    }
   }
  },
  {
   "prompt": "fast-paced upbeat mediterranean style acoustic guitar track you could dance to.",
   "audio": {
    "base": "assets/examples/cherry/06/base.mp3",
    "transcribe": "assets/examples/cherry/06/transcribe.mp3",
    "ours": "assets/examples/cherry/06/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/cherry/06/base.jpg",
    "transcribe": "assets/examples/cherry/06/transcribe.jpg",
    "ours": "assets/examples/cherry/06/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.4387,
     "dsg": 0.5761,
     "muq": 4.49
    },
    "transcribe": {
     "clap": 0.5117,
     "dsg": 0.6699,
     "muq": 4.385
    },
    "ours": {
     "clap": 0.5775,
     "dsg": 0.997,
     "muq": 4.172
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "mediterranean style"
     ],
     "full": [
      {
       "text": "mediterranean style",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "upbeat"
     ],
     "full": [
      {
       "text": "upbeat",
       "inferred": false
      },
      {
       "text": "energetic",
       "inferred": true
      },
      {
       "text": "joyful",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "F\u266f major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "130",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "acoustic guitar"
     ],
     "full": [
      {
       "text": "acoustic guitar",
       "inferred": false
      },
      {
       "text": "bongos",
       "inferred": true
      },
      {
       "text": "tambourine",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "mediterranean",
      "acoustic guitar",
      "upbeat",
      "fast-paced",
      "dancing",
      "folk",
      "energetic",
      "instrumental"
     ],
     "full": [
      {
       "text": "mediterranean",
       "inferred": false
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "joyful",
       "inferred": true
      },
      {
       "text": "upbeat",
       "inferred": false
      },
      {
       "text": "acoustic guitar",
       "inferred": false
      },
      {
       "text": "bongos",
       "inferred": true
      },
      {
       "text": "tambourine",
       "inferred": true
      },
      {
       "text": "danceable",
       "inferred": true
      }
     ]
    }
   ],
   "dsg": {
    "questions": [
     {
      "id": 1,
      "text": "Is there acoustic guitar?",
      "type": "presence",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.995
       },
       "transcribe": {
        "yes": true,
        "conf": 1.0
       },
       "ours": {
        "yes": true,
        "conf": 1.0
       }
      }
     },
     {
      "id": 2,
      "text": "Is the genre mediterranean style?",
      "type": "genre",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.971
       },
       "transcribe": {
        "yes": true,
        "conf": 0.924
       },
       "ours": {
        "yes": true,
        "conf": 0.996
       }
      }
     },
     {
      "id": 3,
      "text": "Is the overall mood upbeat?",
      "type": "mood",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.047
       },
       "transcribe": {
        "yes": true,
        "conf": 0.755
       },
       "ours": {
        "yes": true,
        "conf": 0.992
       }
      }
     },
     {
      "id": 4,
      "text": "Is the tempo fast-paced?",
      "type": "bpm",
      "deps": [],
      "kind": "detector",
      "answers": {
       "base": {
        "yes": false,
        "detected": "104 BPM",
        "conf": 0.292
       },
       "transcribe": {
        "yes": false,
        "detected": "81 BPM",
        "conf": 0.001
       },
       "ours": {
        "yes": true,
        "detected": "129 BPM",
        "conf": 1.0
       }
      }
     }
    ],
    "scores": {
     "base": 0.5761,
     "transcribe": 0.6699,
     "ours": 0.997
    }
   }
  },
  {
   "prompt": "Mysterious piece of jazz music for a typical film noir scene, played on piano, bass (and with a trumpet solo section).",
   "audio": {
    "base": "assets/examples/cherry/07/base.mp3",
    "transcribe": "assets/examples/cherry/07/transcribe.mp3",
    "ours": "assets/examples/cherry/07/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/cherry/07/base.jpg",
    "transcribe": "assets/examples/cherry/07/transcribe.jpg",
    "ours": "assets/examples/cherry/07/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2011,
     "dsg": 0.664,
     "muq": 4.297
    },
    "transcribe": {
     "clap": 0.2197,
     "dsg": 0.6643,
     "muq": 4.552
    },
    "ours": {
     "clap": 0.4932,
     "dsg": 0.8203,
     "muq": 4.052
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "jazz"
     ],
     "full": [
      {
       "text": "jazz",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "mysterious"
     ],
     "full": [
      {
       "text": "mysterious",
       "inferred": false
      },
      {
       "text": "noir",
       "inferred": true
      },
      {
       "text": "suspenseful",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "low",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "B\u266d minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "72",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "piano",
      "bass",
      "trumpet"
     ],
     "full": [
      {
       "text": "piano",
       "inferred": false
      },
      {
       "text": "bass",
       "inferred": false
      },
      {
       "text": "trumpet",
       "inferred": false
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "jazz",
      "film noir",
      "mysterious",
      "piano",
      "bass",
      "trumpet",
      "solo",
      "cinematic"
     ],
     "full": [
      {
       "text": "jazz",
       "inferred": false
      },
      {
       "text": "film noir",
       "inferred": false
      },
      {
       "text": "mysterious",
       "inferred": false
      },
      {
       "text": "suspenseful",
       "inferred": true
      },
      {
       "text": "low-energy",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": false
      },
      {
       "text": "bass",
       "inferred": false
      },
      {
       "text": "trumpet",
       "inferred": false
      }
     ]
    }
   ],
   "dsg": {
    "questions": [
     {
      "id": 1,
      "text": "Is there piano?",
      "type": "presence",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.407
       },
       "transcribe": {
        "yes": true,
        "conf": 0.94
       },
       "ours": {
        "yes": true,
        "conf": 0.924
       }
      }
     },
     {
      "id": 2,
      "text": "Is there bass?",
      "type": "presence",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.967
       },
       "transcribe": {
        "yes": true,
        "conf": 0.94
       },
       "ours": {
        "yes": true,
        "conf": 0.893
       }
      }
     },
     {
      "id": 3,
      "text": "Is there trumpet?",
      "type": "presence",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.995
       },
       "transcribe": {
        "yes": true,
        "conf": 0.982
       },
       "ours": {
        "yes": true,
        "conf": 0.622
       }
      }
     },
     {
      "id": 4,
      "text": "Is the genre jazz?",
      "type": "genre",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.984
       },
       "transcribe": {
        "yes": true,
        "conf": 0.953
       },
       "ours": {
        "yes": true,
        "conf": 0.989
       }
      }
     },
     {
      "id": 5,
      "text": "Is the overall mood mysterious?",
      "type": "mood",
      "deps": [],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": false,
        "conf": 0.005
       },
       "transcribe": {
        "yes": false,
        "conf": 0.007
       },
       "ours": {
        "yes": true,
        "conf": 0.852
       }
      }
     },
     {
      "id": 6,
      "text": "Does the trumpet play a solo?",
      "type": "count",
      "deps": [
       3
      ],
      "kind": "qa",
      "answers": {
       "base": {
        "yes": true,
        "conf": 0.988
       },
       "transcribe": {
        "yes": true,
        "conf": 0.798
       },
       "ours": {
        "yes": true,
        "conf": 0.852
       }
      }
     }
    ],
    "scores": {
     "base": 0.664,
     "transcribe": 0.6643,
     "ours": 0.8203
    }
   }
  }
 ],
 "additional": [
  {
   "prompt": "Fast tempo electronic music with a melody that repeats consistently",
   "audio": {
    "base": "assets/examples/additional/01/base.mp3",
    "transcribe": "assets/examples/additional/01/transcribe.mp3",
    "ours": "assets/examples/additional/01/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/01/base.jpg",
    "transcribe": "assets/examples/additional/01/transcribe.jpg",
    "ours": "assets/examples/additional/01/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.0735,
     "dsg": 0.2751,
     "muq": 3.156
    },
    "transcribe": {
     "clap": 0.0785,
     "dsg": 0.5936,
     "muq": 3.375
    },
    "ours": {
     "clap": 0.3171,
     "dsg": 0.9908,
     "muq": 3.948
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "electronic"
     ],
     "full": [
      {
       "text": "electronic",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "driving",
       "inferred": true
      },
      {
       "text": "hypnotic",
       "inferred": true
      },
      {
       "text": "energetic",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "G minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "130",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "synthesizer",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "electronic",
      "fast tempo",
      "repetitive",
      "melodic"
     ],
     "full": [
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      },
      {
       "text": "hypnotic",
       "inferred": true
      },
      {
       "text": "electronic",
       "inferred": false
      },
      {
       "text": "synthesizer",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "Drum\u2019n bass song that makes it hard not to shake your head or feet while listening.",
   "audio": {
    "base": "assets/examples/additional/02/base.mp3",
    "transcribe": "assets/examples/additional/02/transcribe.mp3",
    "ours": "assets/examples/additional/02/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/02/base.jpg",
    "transcribe": "assets/examples/additional/02/transcribe.jpg",
    "ours": "assets/examples/additional/02/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.1916,
     "dsg": 0.4447,
     "muq": 4.0
    },
    "transcribe": {
     "clap": 0.2082,
     "dsg": 0.7103,
     "muq": 3.365
    },
    "ours": {
     "clap": 0.3958,
     "dsg": 0.9989,
     "muq": 3.776
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "drum'n bass"
     ],
     "full": [
      {
       "text": "drum'n bass",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "energetic",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      },
      {
       "text": "rhythmic",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "F minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "174",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      },
      {
       "text": "synthesizer",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "drum and bass",
      "upbeat",
      "energetic",
      "head-nodding",
      "foot-tapping",
      "danceable",
      "rhythmic",
      "club"
     ],
     "full": [
      {
       "text": "drum and bass",
       "inferred": false
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      },
      {
       "text": "rhythmic",
       "inferred": false
      },
      {
       "text": "electronic",
       "inferred": true
      },
      {
       "text": "upbeat",
       "inferred": false
      },
      {
       "text": "dance",
       "inferred": true
      },
      {
       "text": "energetic",
       "inferred": false
      }
     ]
    }
   ]
  },
  {
   "prompt": "This a dark artsy metal piece featuring plenty of sound effects.",
   "audio": {
    "base": "assets/examples/additional/03/base.mp3",
    "transcribe": "assets/examples/additional/03/transcribe.mp3",
    "ours": "assets/examples/additional/03/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/03/base.jpg",
    "transcribe": "assets/examples/additional/03/transcribe.jpg",
    "ours": "assets/examples/additional/03/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.1124,
     "dsg": 0.3886,
     "muq": 4.057
    },
    "transcribe": {
     "clap": 0.1568,
     "dsg": 0.7231,
     "muq": 2.417
    },
    "ours": {
     "clap": 0.2382,
     "dsg": 0.9697,
     "muq": 3.312
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "metal"
     ],
     "full": [
      {
       "text": "metal",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "dark",
      "artsy"
     ],
     "full": [
      {
       "text": "dark",
       "inferred": false
      },
      {
       "text": "artsy",
       "inferred": false
      },
      {
       "text": "ominous",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "G minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "140",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "sound effects"
     ],
     "full": [
      {
       "text": "sound effect",
       "inferred": true
      },
      {
       "text": "electric guitar",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "dark",
      "artsy",
      "metal",
      "sound effects"
     ],
     "full": [
      {
       "text": "dark metal",
       "inferred": true
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "ominous",
       "inferred": true
      },
      {
       "text": "artsy",
       "inferred": false
      },
      {
       "text": "electric guitar",
       "inferred": true
      },
      {
       "text": "sound effects",
       "inferred": false
      }
     ]
    }
   ]
  },
  {
   "prompt": "This music is piano waltz music of the classical genre and is reminiscent of Chopin, but it is not Chopin's original work.",
   "audio": {
    "base": "assets/examples/additional/04/base.mp3",
    "transcribe": "assets/examples/additional/04/transcribe.mp3",
    "ours": "assets/examples/additional/04/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/04/base.jpg",
    "transcribe": "assets/examples/additional/04/transcribe.jpg",
    "ours": "assets/examples/additional/04/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.1785,
     "dsg": 0.5148,
     "muq": 4.75
    },
    "transcribe": {
     "clap": 0.2302,
     "dsg": 0.7319,
     "muq": 4.479
    },
    "ours": {
     "clap": 0.2661,
     "dsg": 0.9541,
     "muq": 4.542
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "classical"
     ],
     "full": [
      {
       "text": "classical",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "romantic",
       "inferred": true
      },
      {
       "text": "elegant",
       "inferred": true
      },
      {
       "text": "nostalgic",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "B\u266d major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "90",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [
      "3/4"
     ],
     "full": [
      {
       "text": "3/4",
       "inferred": false
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "piano"
     ],
     "full": [
      {
       "text": "piano",
       "inferred": false
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "classical",
      "piano",
      "waltz",
      "romantic",
      "chopin-style",
      "solo",
      "instrumental",
      "nostalgic"
     ],
     "full": [
      {
       "text": "classical piano",
       "inferred": true
      },
      {
       "text": "waltz",
       "inferred": false
      },
      {
       "text": "romantic",
       "inferred": false
      },
      {
       "text": "elegant",
       "inferred": true
      },
      {
       "text": "medium-energy",
       "inferred": true
      },
      {
       "text": "neoclassical",
       "inferred": true
      },
      {
       "text": "piano solo",
       "inferred": true
      },
      {
       "text": "ballroom",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "Agitated West Coast rock with brief bass solo and British influence",
   "audio": {
    "base": "assets/examples/additional/05/base.mp3",
    "transcribe": "assets/examples/additional/05/transcribe.mp3",
    "ours": "assets/examples/additional/05/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/05/base.jpg",
    "transcribe": "assets/examples/additional/05/transcribe.jpg",
    "ours": "assets/examples/additional/05/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.073,
     "dsg": 0.0726,
     "muq": 4.146
    },
    "transcribe": {
     "clap": 0.2936,
     "dsg": 0.5465,
     "muq": 2.906
    },
    "ours": {
     "clap": 0.4609,
     "dsg": 0.7256,
     "muq": 4.208
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "West Coast rock"
     ],
     "full": [
      {
       "text": "West Coast rock",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "agitated"
     ],
     "full": [
      {
       "text": "agitated",
       "inferred": false
      },
      {
       "text": "tense",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "C minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "130",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "bass"
     ],
     "full": [
      {
       "text": "bass",
       "inferred": false
      },
      {
       "text": "electric guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "electric piano",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "west coast rock",
      "british influence",
      "agitated",
      "bass solo"
     ],
     "full": [
      {
       "text": "west coast rock",
       "inferred": false
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "tense",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      },
      {
       "text": "electric guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "british influence",
       "inferred": false
      }
     ]
    }
   ]
  },
  {
   "prompt": "this song starts with an emotional piano melody and then drops into a kind of DnB track with drum break samples and a thumping bass, keeping the piano and later on it has a drum break, whe a violin is added.",
   "audio": {
    "base": "assets/examples/additional/06/base.mp3",
    "transcribe": "assets/examples/additional/06/transcribe.mp3",
    "ours": "assets/examples/additional/06/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/06/base.jpg",
    "transcribe": "assets/examples/additional/06/transcribe.jpg",
    "ours": "assets/examples/additional/06/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2113,
     "dsg": 0.3059,
     "muq": 3.734
    },
    "transcribe": {
     "clap": 0.2414,
     "dsg": 0.4628,
     "muq": 3.75
    },
    "ours": {
     "clap": 0.3208,
     "dsg": 0.7252,
     "muq": 3.875
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "DnB"
     ],
     "full": [
      {
       "text": "DnB",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "emotional"
     ],
     "full": [
      {
       "text": "emotional",
       "inferred": false
      },
      {
       "text": "intense",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "D\u266f minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "174",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "piano",
      "drum break",
      "bass",
      "violin"
     ],
     "full": [
      {
       "text": "piano",
       "inferred": false
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": false
      },
      {
       "text": "violin",
       "inferred": false
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "emotional piano",
      "drum and bass",
      "drum break",
      "thumping bass",
      "violin",
      "cinematic",
      "electronic",
      "instrumental"
     ],
     "full": [
      {
       "text": "drum and bass",
       "inferred": false
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "emotional",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": true
      },
      {
       "text": "violin",
       "inferred": false
      }
     ]
    }
   ]
  },
  {
   "prompt": "A warm and slow paced song that has an R&B base invites to get closer.",
   "audio": {
    "base": "assets/examples/additional/07/base.mp3",
    "transcribe": "assets/examples/additional/07/transcribe.mp3",
    "ours": "assets/examples/additional/07/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/07/base.jpg",
    "transcribe": "assets/examples/additional/07/transcribe.jpg",
    "ours": "assets/examples/additional/07/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.1957,
     "dsg": 0.6023,
     "muq": 4.135
    },
    "transcribe": {
     "clap": 0.2839,
     "dsg": 0.74,
     "muq": 4.13
    },
    "ours": {
     "clap": 0.371,
     "dsg": 0.9657,
     "muq": 4.479
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "R&B"
     ],
     "full": [
      {
       "text": "R&B",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "warm"
     ],
     "full": [
      {
       "text": "warm",
       "inferred": false
      },
      {
       "text": "intimate",
       "inferred": true
      },
      {
       "text": "smooth",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "low",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "G major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "70",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "guitar",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "r&b",
      "warm",
      "slow-paced",
      "intimate"
     ],
     "full": [
      {
       "text": "r&b",
       "inferred": false
      },
      {
       "text": "intimate",
       "inferred": false
      },
      {
       "text": "smooth",
       "inferred": true
      },
      {
       "text": "warm",
       "inferred": false
      },
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "guitar",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "A salsa song with the distinctive cowbells that are the metronome. I am not very pleased with the mix of the percussion and would definitely need more syncopation for the bass line and more focus on the second and fourth beat. Apart from that, it is a very happy tune  that I would find myself dancing through in a latin night. I can't help but smile when I listen to that genre",
   "audio": {
    "base": "assets/examples/additional/08/base.mp3",
    "transcribe": "assets/examples/additional/08/transcribe.mp3",
    "ours": "assets/examples/additional/08/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/08/base.jpg",
    "transcribe": "assets/examples/additional/08/transcribe.jpg",
    "ours": "assets/examples/additional/08/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2735,
     "dsg": 0.6065,
     "muq": 3.526
    },
    "transcribe": {
     "clap": 0.2911,
     "dsg": 0.7999,
     "muq": 3.797
    },
    "ours": {
     "clap": 0.3622,
     "dsg": 0.9297,
     "muq": 3.823
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "salsa"
     ],
     "full": [
      {
       "text": "salsa",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "happy"
     ],
     "full": [
      {
       "text": "happy",
       "inferred": false
      },
      {
       "text": "joyful",
       "inferred": true
      },
      {
       "text": "danceable",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "D\u266f major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "180",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "cowbells"
     ],
     "full": [
      {
       "text": "bell",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": true
      },
      {
       "text": "congas",
       "inferred": true
      },
      {
       "text": "cowbell",
       "inferred": true
      },
      {
       "text": "trumpet",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "salsa",
      "happy",
      "cowbell",
      "percussion",
      "bass",
      "second and fourth beats",
      "syncopation",
      "mix"
     ],
     "full": [
      {
       "text": "salsa",
       "inferred": false
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "joyful",
       "inferred": true
      },
      {
       "text": "danceable",
       "inferred": true
      },
      {
       "text": "congas",
       "inferred": true
      },
      {
       "text": "trumpets",
       "inferred": true
      },
      {
       "text": "cowbells",
       "inferred": true
      },
      {
       "text": "latin",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "This classical piece has interesting pacing and dynamics- it is not particularly fast and does not feature an extremely wide dynamic range, but it is also far from sleepy. Overall, the tempo is moderate, with a fairly complex interplay between the instruments which keeps things stimulating. The mood is somewhat relaxed, but also thought-provoking.",
   "audio": {
    "base": "assets/examples/additional/09/base.mp3",
    "transcribe": "assets/examples/additional/09/transcribe.mp3",
    "ours": "assets/examples/additional/09/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/09/base.jpg",
    "transcribe": "assets/examples/additional/09/transcribe.jpg",
    "ours": "assets/examples/additional/09/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": -0.1841,
     "dsg": 0.6502,
     "muq": 4.307
    },
    "transcribe": {
     "clap": 0.1004,
     "dsg": 0.8312,
     "muq": 4.333
    },
    "ours": {
     "clap": 0.2365,
     "dsg": 0.9522,
     "muq": 4.719
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "classical"
     ],
     "full": [
      {
       "text": "classical",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "relaxed",
      "thought-provoking"
     ],
     "full": [
      {
       "text": "relaxed",
       "inferred": false
      },
      {
       "text": "thought-provoking",
       "inferred": false
      },
      {
       "text": "contemplative",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "F major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "90",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "violin",
       "inferred": true
      },
      {
       "text": "cello",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "classical",
      "moderate tempo",
      "stimulating",
      "relaxed",
      "thought-provoking",
      "dynamic interplay",
      "chamber music"
     ],
     "full": [
      {
       "text": "classical",
       "inferred": false
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "violin",
       "inferred": true
      },
      {
       "text": "cello",
       "inferred": true
      },
      {
       "text": "relaxed",
       "inferred": false
      },
      {
       "text": "contemplative",
       "inferred": true
      },
      {
       "text": "chamber music",
       "inferred": false
      },
      {
       "text": "instrumental",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "Electronic music with a political message in the beginning evoking a confused emotion",
   "audio": {
    "base": "assets/examples/additional/10/base.mp3",
    "transcribe": "assets/examples/additional/10/transcribe.mp3",
    "ours": "assets/examples/additional/10/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/10/base.jpg",
    "transcribe": "assets/examples/additional/10/transcribe.jpg",
    "ours": "assets/examples/additional/10/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.1583,
     "dsg": 0.3095,
     "muq": 3.875
    },
    "transcribe": {
     "clap": 0.2248,
     "dsg": 0.4249,
     "muq": 3.911
    },
    "ours": {
     "clap": 0.258,
     "dsg": 0.7053,
     "muq": 3.984
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "electronic"
     ],
     "full": [
      {
       "text": "electronic",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "confused"
     ],
     "full": [
      {
       "text": "confused",
       "inferred": false
      },
      {
       "text": "tense",
       "inferred": true
      },
      {
       "text": "unsettling",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "G\u266f minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "110",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "synthesizer",
       "inferred": true
      },
      {
       "text": "synthesizer pad",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "electronic",
      "political",
      "confused",
      "message-driven"
     ],
     "full": [
      {
       "text": "electronic",
       "inferred": false
      },
      {
       "text": "tense",
       "inferred": true
      },
      {
       "text": "unsettling",
       "inferred": true
      },
      {
       "text": "confused",
       "inferred": false
      },
      {
       "text": "political",
       "inferred": false
      },
      {
       "text": "synthesizer",
       "inferred": true
      },
      {
       "text": "pad",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "Fast tempo instrumental song and beats that gives a sense of urgency made using midi electronic samples which can be used for a game soundtrack",
   "audio": {
    "base": "assets/examples/additional/11/base.mp3",
    "transcribe": "assets/examples/additional/11/transcribe.mp3",
    "ours": "assets/examples/additional/11/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/11/base.jpg",
    "transcribe": "assets/examples/additional/11/transcribe.jpg",
    "ours": "assets/examples/additional/11/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.0595,
     "dsg": 0.7768,
     "muq": 4.656
    },
    "transcribe": {
     "clap": 0.2928,
     "dsg": 0.9002,
     "muq": 3.536
    },
    "ours": {
     "clap": 0.3054,
     "dsg": 0.9904,
     "muq": 3.49
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "game soundtrack"
     ],
     "full": [
      {
       "text": "game soundtrack",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "urgency"
     ],
     "full": [
      {
       "text": "urgency",
       "inferred": false
      },
      {
       "text": "intense",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "high",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "F\u266f minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "160",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "midi electronic samples"
     ],
     "full": [
      {
       "text": "synthesizer",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "fast tempo",
      "urgent",
      "instrumental",
      "electronic",
      "midi",
      "game soundtrack"
     ],
     "full": [
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "intense",
       "inferred": true
      },
      {
       "text": "driving",
       "inferred": true
      },
      {
       "text": "game soundtrack",
       "inferred": false
      },
      {
       "text": "synthesizer",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      },
      {
       "text": "urgency",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "Instrumental with a jazz feel played with soft drums percussion and think bass guitar tone which can be used to relax while having a glass of wine at home",
   "audio": {
    "base": "assets/examples/additional/12/base.mp3",
    "transcribe": "assets/examples/additional/12/transcribe.mp3",
    "ours": "assets/examples/additional/12/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/12/base.jpg",
    "transcribe": "assets/examples/additional/12/transcribe.jpg",
    "ours": "assets/examples/additional/12/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2261,
     "dsg": 0.7447,
     "muq": 4.182
    },
    "transcribe": {
     "clap": 0.4562,
     "dsg": 0.8213,
     "muq": 3.833
    },
    "ours": {
     "clap": 0.4876,
     "dsg": 0.9212,
     "muq": 4.396
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "jazz"
     ],
     "full": [
      {
       "text": "jazz",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "relax"
     ],
     "full": [
      {
       "text": "relax",
       "inferred": false
      },
      {
       "text": "calm",
       "inferred": true
      },
      {
       "text": "smooth",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [
      "low"
     ],
     "full": [
      {
       "text": "low",
       "inferred": false
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "F major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "85",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "soft drums",
      "percussion",
      "bass guitar"
     ],
     "full": [
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "percussion",
       "inferred": false
      },
      {
       "text": "bass guitar",
       "inferred": false
      },
      {
       "text": "electric piano",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "jazz",
      "instrumental",
      "soft drums",
      "thin bass",
      "relaxing",
      "wine",
      "home"
     ],
     "full": [
      {
       "text": "smooth jazz",
       "inferred": true
      },
      {
       "text": "low-energy",
       "inferred": true
      },
      {
       "text": "calm",
       "inferred": true
      },
      {
       "text": "soft drum kit",
       "inferred": true
      },
      {
       "text": "thin bass guitar",
       "inferred": true
      },
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "relaxing",
       "inferred": false
      },
      {
       "text": "home",
       "inferred": false
      }
     ]
    }
   ]
  },
  {
   "prompt": "Traditional formula for an RnB track, not so creative. Cannot stand for more than 30 seconds.",
   "audio": {
    "base": "assets/examples/additional/13/base.mp3",
    "transcribe": "assets/examples/additional/13/transcribe.mp3",
    "ours": "assets/examples/additional/13/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/13/base.jpg",
    "transcribe": "assets/examples/additional/13/transcribe.jpg",
    "ours": "assets/examples/additional/13/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.0675,
     "dsg": 0.0293,
     "muq": 3.927
    },
    "transcribe": {
     "clap": 0.1257,
     "dsg": 0.0954,
     "muq": 3.823
    },
    "ours": {
     "clap": 0.3131,
     "dsg": 0.8176,
     "muq": 4.245
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "RnB"
     ],
     "full": [
      {
       "text": "RnB",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "smooth",
       "inferred": true
      },
      {
       "text": "soulful",
       "inferred": true
      },
      {
       "text": "relaxed",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "D\u266f minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "90",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "synthesizer pad",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "rnb",
      "traditional",
      "short",
      "uncreative"
     ],
     "full": [
      {
       "text": "traditional rnb",
       "inferred": true
      },
      {
       "text": "soulful",
       "inferred": true
      },
      {
       "text": "relaxed",
       "inferred": true
      },
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "bass guitar",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "synthesizer pad",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "Instrumental song with classical blues chords but played with a big band style.",
   "audio": {
    "base": "assets/examples/additional/14/base.mp3",
    "transcribe": "assets/examples/additional/14/transcribe.mp3",
    "ours": "assets/examples/additional/14/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/14/base.jpg",
    "transcribe": "assets/examples/additional/14/transcribe.jpg",
    "ours": "assets/examples/additional/14/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2498,
     "dsg": 0.4284,
     "muq": 3.844
    },
    "transcribe": {
     "clap": 0.3705,
     "dsg": 0.4742,
     "muq": 3.786
    },
    "ours": {
     "clap": 0.445,
     "dsg": 0.5907,
     "muq": 3.943
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "big band"
     ],
     "full": [
      {
       "text": "big band",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "bluesy",
       "inferred": true
      },
      {
       "text": "sophisticated",
       "inferred": true
      },
      {
       "text": "swinging",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "A minor",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "110",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "brass section",
       "inferred": true
      },
      {
       "text": "saxophone",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "instrumental",
      "classical blues",
      "big band"
     ],
     "full": [
      {
       "text": "big band",
       "inferred": false
      },
      {
       "text": "bluesy",
       "inferred": true
      },
      {
       "text": "sophisticated",
       "inferred": true
      },
      {
       "text": "instrumental",
       "inferred": false
      },
      {
       "text": "brass section",
       "inferred": true
      },
      {
       "text": "saxophone",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "1940s",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "strong beat, relax and danceful music with drums and piano. Library music.",
   "audio": {
    "base": "assets/examples/additional/15/base.mp3",
    "transcribe": "assets/examples/additional/15/transcribe.mp3",
    "ours": "assets/examples/additional/15/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/15/base.jpg",
    "transcribe": "assets/examples/additional/15/transcribe.jpg",
    "ours": "assets/examples/additional/15/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.2966,
     "dsg": 0.7406,
     "muq": 3.344
    },
    "transcribe": {
     "clap": 0.3948,
     "dsg": 0.7716,
     "muq": 3.714
    },
    "ours": {
     "clap": 0.4352,
     "dsg": 0.837,
     "muq": 4.219
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "library music"
     ],
     "full": [
      {
       "text": "library music",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "relax",
      "danceful"
     ],
     "full": [
      {
       "text": "relax",
       "inferred": false
      },
      {
       "text": "danceful",
       "inferred": false
      },
      {
       "text": "upbeat",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [
      "high"
     ],
     "full": [
      {
       "text": "high",
       "inferred": false
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "E major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "118",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "drums",
      "piano"
     ],
     "full": [
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": false
      },
      {
       "text": "bass",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "library music",
      "strong beat",
      "relaxing",
      "danceful",
      "drums",
      "piano"
     ],
     "full": [
      {
       "text": "upbeat",
       "inferred": true
      },
      {
       "text": "relaxing",
       "inferred": false
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "library music",
       "inferred": false
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": false
      },
      {
       "text": "bass",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "Instrumental piece with some baroque-era musical arrangements that could well be used in the opening credits of a period film.",
   "audio": {
    "base": "assets/examples/additional/16/base.mp3",
    "transcribe": "assets/examples/additional/16/transcribe.mp3",
    "ours": "assets/examples/additional/16/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/16/base.jpg",
    "transcribe": "assets/examples/additional/16/transcribe.jpg",
    "ours": "assets/examples/additional/16/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.1498,
     "dsg": 0.5028,
     "muq": 3.193
    },
    "transcribe": {
     "clap": 0.345,
     "dsg": 0.5322,
     "muq": 4.333
    },
    "ours": {
     "clap": 0.4556,
     "dsg": 0.9975,
     "muq": 4.729
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [],
     "full": [
      {
       "text": "classical",
       "inferred": true
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "grand",
       "inferred": true
      },
      {
       "text": "formal",
       "inferred": true
      },
      {
       "text": "dignified",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "D major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "100",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "string section",
       "inferred": true
      },
      {
       "text": "harpsichord",
       "inferred": true
      },
      {
       "text": "oboe",
       "inferred": true
      },
      {
       "text": "trumpet",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "baroque",
      "instrumental",
      "period film",
      "opening credits",
      "classical",
      "orchestral",
      "historical",
      "cinematic"
     ],
     "full": [
      {
       "text": "baroque",
       "inferred": false
      },
      {
       "text": "classical",
       "inferred": false
      },
      {
       "text": "grand",
       "inferred": true
      },
      {
       "text": "dignified",
       "inferred": true
      },
      {
       "text": "string section",
       "inferred": true
      },
      {
       "text": "harpsichord",
       "inferred": true
      },
      {
       "text": "oboe",
       "inferred": true
      },
      {
       "text": "trumpet",
       "inferred": true
      }
     ]
    }
   ]
  },
  {
   "prompt": "Chill house music with a rising energy level and a soothing beat drop.",
   "audio": {
    "base": "assets/examples/additional/17/base.mp3",
    "transcribe": "assets/examples/additional/17/transcribe.mp3",
    "ours": "assets/examples/additional/17/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/17/base.jpg",
    "transcribe": "assets/examples/additional/17/transcribe.jpg",
    "ours": "assets/examples/additional/17/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.3964,
     "dsg": 0.5908,
     "muq": 3.198
    },
    "transcribe": {
     "clap": 0.3978,
     "dsg": 0.6177,
     "muq": 4.068
    },
    "ours": {
     "clap": 0.4438,
     "dsg": 0.7361,
     "muq": 3.771
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "house"
     ],
     "full": [
      {
       "text": "house",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "soothing"
     ],
     "full": [
      {
       "text": "soothing",
       "inferred": false
      },
      {
       "text": "chill",
       "inferred": true
      },
      {
       "text": "euphoric",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [
      "high"
     ],
     "full": [
      {
       "text": "high",
       "inferred": false
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "C\u266f major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "124",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "synthesizer pad",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      },
      {
       "text": "electric piano",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "chill house",
      "rising energy",
      "soothing beat drop"
     ],
     "full": [
      {
       "text": "chill house",
       "inferred": false
      },
      {
       "text": "euphoric",
       "inferred": true
      },
      {
       "text": "high-energy",
       "inferred": true
      },
      {
       "text": "synthesizer pad",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass synthesizer",
       "inferred": true
      },
      {
       "text": "electric piano",
       "inferred": true
      },
      {
       "text": "rising energy",
       "inferred": false
      }
     ]
    }
   ]
  },
  {
   "prompt": "slow and arpeggiated solo piano with a boatload of reverb",
   "audio": {
    "base": "assets/examples/additional/18/base.mp3",
    "transcribe": "assets/examples/additional/18/transcribe.mp3",
    "ours": "assets/examples/additional/18/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/18/base.jpg",
    "transcribe": "assets/examples/additional/18/transcribe.jpg",
    "ours": "assets/examples/additional/18/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.4293,
     "dsg": 0.7485,
     "muq": 4.573
    },
    "transcribe": {
     "clap": 0.4751,
     "dsg": 0.7688,
     "muq": 4.583
    },
    "ours": {
     "clap": 0.4818,
     "dsg": 0.9213,
     "muq": 4.688
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [],
     "full": [
      {
       "text": "classical",
       "inferred": true
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "slow",
       "inferred": true
      },
      {
       "text": "arpeggiated",
       "inferred": true
      },
      {
       "text": "atmospheric",
       "inferred": true
      },
      {
       "text": "solitary",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "low",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "F major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "60",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [
      "piano"
     ],
     "full": [
      {
       "text": "piano",
       "inferred": false
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "solo piano",
      "arpeggiated",
      "slow",
      "reverb",
      "ambient",
      "minimalist",
      "reflective",
      "cinematic"
     ],
     "full": [
      {
       "text": "solo piano",
       "inferred": false
      },
      {
       "text": "arpeggiated",
       "inferred": false
      },
      {
       "text": "low-energy",
       "inferred": true
      },
      {
       "text": "atmospheric",
       "inferred": true
      },
      {
       "text": "solitary",
       "inferred": true
      },
      {
       "text": "reverb",
       "inferred": false
      },
      {
       "text": "slow",
       "inferred": false
      },
      {
       "text": "minimalist",
       "inferred": false
      }
     ]
    }
   ]
  },
  {
   "prompt": "an uplifting jazz song that makes your head shake",
   "audio": {
    "base": "assets/examples/additional/19/base.mp3",
    "transcribe": "assets/examples/additional/19/transcribe.mp3",
    "ours": "assets/examples/additional/19/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/19/base.jpg",
    "transcribe": "assets/examples/additional/19/transcribe.jpg",
    "ours": "assets/examples/additional/19/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.3461,
     "dsg": 0.4673,
     "muq": 4.323
    },
    "transcribe": {
     "clap": 0.4038,
     "dsg": 0.476,
     "muq": 4.396
    },
    "ours": {
     "clap": 0.5512,
     "dsg": 0.9843,
     "muq": 3.755
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "jazz"
     ],
     "full": [
      {
       "text": "jazz",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [
      "uplifting"
     ],
     "full": [
      {
       "text": "uplifting",
       "inferred": false
      },
      {
       "text": "groovy",
       "inferred": true
      },
      {
       "text": "energetic",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "G major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "110",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "trumpet",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "uplifting",
      "jazz",
      "energetic",
      "head-nodding",
      "upbeat"
     ],
     "full": [
      {
       "text": "jazz",
       "inferred": false
      },
      {
       "text": "groovy",
       "inferred": true
      },
      {
       "text": "energetic",
       "inferred": false
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": true
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "trumpet",
       "inferred": true
      },
      {
       "text": "head-nodding",
       "inferred": false
      }
     ]
    }
   ]
  },
  {
   "prompt": "Pop song with a classical chord progression in which all instruments join progressively, building up a richer and richer music.",
   "audio": {
    "base": "assets/examples/additional/20/base.mp3",
    "transcribe": "assets/examples/additional/20/transcribe.mp3",
    "ours": "assets/examples/additional/20/ours.mp3"
   },
   "spectrogram": {
    "base": "assets/examples/additional/20/base.jpg",
    "transcribe": "assets/examples/additional/20/transcribe.jpg",
    "ours": "assets/examples/additional/20/ours.jpg"
   },
   "metrics": {
    "base": {
     "clap": 0.1483,
     "dsg": 0.3347,
     "muq": 3.219
    },
    "transcribe": {
     "clap": 0.3257,
     "dsg": 0.3419,
     "muq": 4.281
    },
    "ours": {
     "clap": 0.3996,
     "dsg": 0.8181,
     "muq": 4.307
    }
   },
   "scap": [
    {
     "field": "genre",
     "partial": [
      "pop"
     ],
     "full": [
      {
       "text": "pop",
       "inferred": false
      }
     ]
    },
    {
     "field": "mood",
     "partial": [],
     "full": [
      {
       "text": "uplifting",
       "inferred": true
      },
      {
       "text": "gradual",
       "inferred": true
      },
      {
       "text": "layered",
       "inferred": true
      }
     ]
    },
    {
     "field": "energy",
     "partial": [],
     "full": [
      {
       "text": "medium",
       "inferred": true
      }
     ]
    },
    {
     "field": "key",
     "partial": [],
     "full": [
      {
       "text": "A major",
       "inferred": true
      }
     ]
    },
    {
     "field": "bpm",
     "partial": [],
     "full": [
      {
       "text": "110",
       "inferred": true
      }
     ]
    },
    {
     "field": "time signature",
     "partial": [],
     "full": [
      {
       "text": "4/4",
       "inferred": true
      }
     ]
    },
    {
     "field": "instruments",
     "partial": [],
     "full": [
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": true
      },
      {
       "text": "drum kit",
       "inferred": true
      },
      {
       "text": "string section",
       "inferred": true
      }
     ]
    },
    {
     "field": "vocal",
     "partial": [],
     "full": []
    },
    {
     "field": "keywords",
     "partial": [
      "pop",
      "classical",
      "building",
      "rich",
      "orchestral",
      "progressive",
      "emotional",
      "cinematic"
     ],
     "full": [
      {
       "text": "pop",
       "inferred": false
      },
      {
       "text": "piano",
       "inferred": true
      },
      {
       "text": "bass",
       "inferred": true
      },
      {
       "text": "drums",
       "inferred": true
      },
      {
       "text": "strings",
       "inferred": true
      },
      {
       "text": "uplifting",
       "inferred": true
      },
      {
       "text": "layered",
       "inferred": true
      },
      {
       "text": "medium-energy",
       "inferred": true
      }
     ]
    }
   ]
  }
 ]
};
