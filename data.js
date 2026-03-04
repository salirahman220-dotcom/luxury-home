var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.040961808975385594,
        "pitch": -0.1001208282018915,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.9969078630117911,
          "pitch": -0.0010105314931969644,
          "rotation": 4.71238898038469,
          "target": "3-stair"
        },
        {
          "yaw": -2.994411728605046,
          "pitch": 0.0655942215937575,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9232869617530373,
        "pitch": 0.05714448915313497,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.344852132472072,
          "pitch": -0.006540753288188483,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.6622924126240353,
          "pitch": 0.15661699946556418,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": -2.659147022492066,
          "pitch": 0.12309712272518958,
          "rotation": 11.780972450961727,
          "target": "3-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9028062758305833,
          "pitch": 0.3592551489225997,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": -1.922214839504516,
          "pitch": 0.16857002834362333,
          "rotation": 0.7853981633974483,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-stair",
      "name": "STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5610620760752916,
        "pitch": 0.002503020705042047,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.4641813083397093,
          "pitch": -0.07650385409746896,
          "rotation": 0,
          "target": "4-upper-living"
        },
        {
          "yaw": -1.5860661084148617,
          "pitch": 0.17736859284573292,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        },
        {
          "yaw": -2.250668592124736,
          "pitch": 0.23822312335335383,
          "rotation": 4.71238898038469,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-upper-living",
      "name": "UPPER LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5614690224076302,
          "pitch": 0.044883236598996845,
          "rotation": 1.5707963267948966,
          "target": "5-bed"
        },
        {
          "yaw": 2.383606014384111,
          "pitch": 1.2681778122708334,
          "rotation": 7.0685834705770345,
          "target": "0-living"
        },
        {
          "yaw": 1.329409501024836,
          "pitch": 0.8160692427570186,
          "rotation": 5.497787143782138,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bed",
      "name": "BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.0623649429455178,
        "pitch": 0.030719800173681477,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.0718222549212264,
          "pitch": 0.03813272794334566,
          "rotation": 0,
          "target": "6-dressing"
        },
        {
          "yaw": 0.7723433055484623,
          "pitch": -0.024482407847621346,
          "rotation": 1.5707963267948966,
          "target": "4-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dressing",
      "name": "DRESSING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.008904741081607881,
        "pitch": 0.10012082820188795,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.629368120472158,
          "pitch": 0.09104747072116837,
          "rotation": 0,
          "target": "5-bed"
        },
        {
          "yaw": 2.8667349003826548,
          "pitch": 0.18003407214050604,
          "rotation": 4.71238898038469,
          "target": "4-upper-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "new 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
