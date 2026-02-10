const BENCHMARKS = [
  {
    "title": "BrowserLeaks – WebGL",
    "url": "https://browserleaks.com/webgl",
    "category": "GPU / WebGL",
    "types": ["Benchmark Tool"],
    "tags": [
      "webgl",
      "fingerprint"
    ],
    "slug": "browserleaks-com-webgl"
  },
  {
    "title": "WebGL Report (v2)",
    "url": "https://webglreport.com/?v=2",
    "category": "GPU / WebGL",
    "types": ["Benchmark Tool"],
    "tags": [
      "webgl",
      "capabilities"
    ],
    "slug": "webglreport-com-v-2"
  },
  {
    "title": "WebAI.run",
    "url": "https://webai.run/",
    "category": "AI / Web",
    "types": ["Benchmark Tool"],
    "tags": [
      "ai",
      "webnn",
      "webgpu"
    ],
    "slug": "webai-run"
  },
  {
    "title": "theinfo.dev – GPU Info",
    "url": "https://theinfo.dev/gpu-info",
    "category": "GPU / Info",
    "types": ["Benchmark Tool"],
    "tags": [
      "gpu",
      "info"
    ],
    "slug": "theinfo-dev-gpu-info"
  },
  {
    "title": "alanhc – browser_test",
    "url": "https://alanhc.github.io/browser_test/",
    "category": "Your Pages",
    "types": ["Benchmark Tool"],
    "tags": [
      "alanhc"
    ],
    "slug": "alanhc-github-io-browser-test"
  },
  {
    "title": "alanhc – JetStream",
    "url": "https://alanhc.github.io/jet-stream/",
    "category": "JS Bench",
    "types": ["Benchmark Tool"],
    "tags": [
      "jetstream",
      "js"
    ],
    "slug": "alanhc-github-io-jet-stream"
  },
  {
    "title": "HTML5Test",
    "url": "https://html5test.co/",
    "category": "Browser / Feature",
    "types": ["Benchmark Tool"],
    "tags": [
      "html5",
      "feature"
    ],
    "slug": "html5test-co"
  },
  {
    "title": "alanhc – MotionMark",
    "url": "https://alanhc.github.io/motion-mark/MotionMark/",
    "category": "Graphics Bench",
    "types": ["App Scrolling"],
    "tags": [
      "motionmark",
      "web"
    ],
    "slug": "alanhc-github-io-motion-mark-motionmark"
  },
  {
    "title": "Mayfield WebBench",
    "url": "https://mayfield.github.io/webbench/pages/bench.html",
    "category": "JS Bench",
    "types": ["Benchmark Tool"],
    "tags": [
      "webbench",
      "js"
    ],
    "slug": "mayfield-github-io-webbench-pages-bench-html"
  },
  {
    "title": "WebXPRT 4 (Principled Technologies)",
    "url": "https://www.principledtechnologies.com/benchmarkxprt/webxprt/2021/wx4_build_3_7_3/",
    "category": "Web Suite",
    "types": ["App Launch time"],
    "tags": [
      "webxprt"
    ],
    "slug": "www-principledtechnologies-com-benchmarkxprt-webxprt-2021-wx"
  },
  {
    "title": "WebGPU Samples – Animometer",
    "url": "https://webgpu.github.io/webgpu-samples/?sample=animometer",
    "category": "WebGPU",
    "types": ["App Scrolling"],
    "tags": [
      "webgpu"
    ],
    "slug": "webgpu-github-io-webgpu-samples-sample-animometer"
  },
  {
    "title": "Nova Web",
    "url": "https://ajlaston.github.io/Nova-Web/",
    "category": "Graphics Bench",
    "types": ["App Scrolling"],
    "tags": [
      "webgl",
      "webgpu"
    ],
    "slug": "ajlaston-github-io-nova-web"
  },
  {
    "title": "toji – WebGPU Test",
    "url": "https://toji.github.io/webgpu-test/",
    "category": "WebGPU",
    "types": ["Benchmark Tool"],
    "tags": [
      "webgpu"
    ],
    "slug": "toji-github-io-webgpu-test"
  },
  {
    "title": "Fractal Benchmark",
    "url": "https://samrat079.github.io/Fractal_Benchmark/",
    "category": "Graphics Bench",
    "types": ["App Scrolling"],
    "tags": [
      "fractal",
      "gpu"
    ],
    "slug": "samrat079-github-io-fractal-benchmark"
  },
  {
    "title": "Chromium Octane (retired)",
    "url": "https://chromium.github.io/octane/",
    "category": "JS Bench",
    "types": ["Benchmark Tool"],
    "tags": [
      "octane",
      "js"
    ],
    "slug": "chromium-github-io-octane"
  },
  {
    "title": "ARES-6",
    "url": "https://browserbench.org/ARES-6/",
    "category": "JS Bench",
    "types": ["Benchmark Tool"],
    "tags": [
      "ares",
      "js"
    ],
    "slug": "browserbench-org-ares-6"
  },
  {
    "title": "Kraken 1.1",
    "url": "https://mozilla.github.io/krakenbenchmark.mozilla.org/kraken-1.1/driver.html",
    "category": "JS Bench",
    "types": ["Benchmark Tool"],
    "tags": [
      "kraken",
      "js"
    ],
    "slug": "mozilla-github-io-krakenbenchmark-mozilla-org-kraken-1-1-dri"
  },
  {
    "title": "WASM CoreMark minimal(wasm3)",
    "url": "https://wasm3.github.io/wasm-coremark/coremark-minimal.html",
    "category": "WASM",
    "types": ["Benchmark Tool"],
    "tags": [
      "wasm",
      "coremark"
    ],
    "slug": "wasm3-github-io-wasm-coremark-coremark-minimal-html"
  },
  {
    "title": "alanhc – WASM CoreMark",
    "url": "https://alanhc.github.io/wasm-coremark/",
    "category": "WASM",
    "types": ["Benchmark Tool"],
    "tags": [
      "wasm",
      "coremark",
      "alanhc"
    ],
    "slug": "alanhc-github-io-wasm-coremark"
  },
  {
    "title": "Massive (WebGL demo)",
    "url": "https://kripken.github.io/Massive/",
    "category": "GPU / WebGL",
    "types": ["App Scrolling"],
    "tags": [
      "webgl",
      "demo"
    ],
    "slug": "kripken-github-io-massive"
  },
  {
    "title": "CPU-X Web Benchmark",
    "url": "https://cpux.net/cpu-benchmark-online",
    "category": "CPU",
    "types": ["Benchmark Tool"],
    "tags": [
      "cpu"
    ],
    "slug": "cpux-net-cpu-benchmark-online"
  },
  {
    "title": "silver.urih.com",
    "url": "https://silver.urih.com/",
    "category": "Misc",
    "types": ["Benchmark Tool"],
    "tags": [
      "misc"
    ],
    "slug": "silver-urih-com"
  },
  {
    "title": "WebGPU Atomics Benchmark",
    "url": "https://pwhiddy.github.io/webgpu-atomics-benchmark/",
    "category": "WebGPU",
    "types": ["Benchmark Tool"],
    "tags": [
      "atomics",
      "webgpu"
    ],
    "slug": "pwhiddy-github-io-webgpu-atomics-benchmark"
  },
  {
    "title": "GPU Stress Test (maksim4351)",
    "url": "https://maksim4351.github.io/test/gpu_stress_test.html",
    "category": "GPU / Stress",
    "types": ["Benchmark Tool"],
    "tags": [
      "stress",
      "gpu"
    ],
    "slug": "maksim4351-github-io-test-gpu-stress-test-html"
  },
  {
    "title": "Basemark Web",
    "url": "https://web.basemark.com/",
    "category": "Web Suite",
    "types": ["App Launch time"],
    "tags": [
      "basemark"
    ],
    "slug": "web-basemark-com"
  },
  {
    "title": "theinfo.dev – GPU Benchmark",
    "url": "https://theinfo.dev/gpu-benchmark",
    "category": "GPU / Benchmark",
    "types": ["Benchmark Tool"],
    "tags": [
      "gpu",
      "benchmark"
    ],
    "slug": "theinfo-dev-gpu-benchmark"
  },
  {
    "title": "Motorcycle 4K 120fps | HDR",
    "url": "https://www.youtube.com/watch?v=VzoqgEsmUjY",
    "category": "Video",
    "types": ["Low Power"],
    "tags": [
      "youtube",
      "4k",
      "hdr",
      "120fps"
    ],
    "slug": "www-youtube-com-watch-v-vzoqgesmujy"
  },
  {
    "title": "Hawaii in 8K | HDR 60FPS",
    "url": "https://www.youtube.com/watch?v=rFVpSwgCkCo",
    "category": "Video",
    "types": ["Low Power"],
    "tags": [
      "youtube",
      "8k",
      "hdr",
      "60fps"
    ],
    "slug": "www-youtube-com-watch-v-rfvpswgckco"
  },
  {
    "title": "YOLO ONNX Benchmark (Web)",
    "url": "https://nomi30701.github.io/yolo-onnx-benchmark-web/",
    "category": "AI / Web",
    "types": ["Benchmark Tool", "Low Power"],
    "tags": [
      "onnx",
      "yolo"
    ],
    "slug": "nomi30701-github-io-yolo-onnx-benchmark-web"
  },
  {
    "title": "transformers.js Benchmarking (HF Space)",
    "url": "https://huggingface.co/spaces/onnx-internal-testing/transformers.js-benchmarking",
    "category": "AI / Web",
    "types": ["Benchmark Tool"],
    "tags": [
      "transformers.js",
      "hf"
    ],
    "slug": "huggingface-co-spaces-onnx-internal-testing-transformers-js-"
  },
  {
    "title": "WebGPU Embedding Benchmark (Xenova)",
    "url": "https://huggingface.co/spaces/Xenova/webgpu-embedding-benchmark",
    "category": "AI / Web",
    "types": ["Benchmark Tool"],
    "tags": [
      "webgpu",
      "embedding",
      "hf"
    ],
    "slug": "huggingface-co-spaces-xenova-webgpu-embedding-benchmark"
  },
  {
    "title": "TensorFlow.js Benchmark (videogames.ai)",
    "url": "https://www.videogames.ai/tensorflow-js-benchmark",
    "category": "AI / Web",
    "types": ["Benchmark Tool", "Low Power"],
    "tags": [
      "tfjs"
    ],
    "slug": "www-videogames-ai-tensorflow-js-benchmark"
  },
  {
    "title": "TFJS Benchmarks (local-benchmark)",
    "url": "https://tfjs-benchmarks.web.app/local-benchmark/",
    "category": "AI / Web",
    "types": ["Benchmark Tool"],
    "tags": [
      "tfjs"
    ],
    "slug": "tfjs-benchmarks-web-app-local-benchmark"
  },
  {
    "title": "alanhc – VAD Bench",
    "url": "https://alanhc.github.io/vad-bench/",
    "category": "AI / Web",
    "types": ["Benchmark Tool", "Low Power"],
    "tags": [
      "alanhc",
      "vad",
      "ai",
      "wasm"
    ],
    "slug": "alanhc-github-io-vad-bench"
  },
  {
    "title": "WebGL Aquarium (Fishtank)",
    "url": "https://webglsamples.org/aquarium/aquarium.html",
    "category": "GPU / WebGL",
    "types": ["Low Power"],
    "tags": [
      "aquarium",
      "webgl",
      "fishtank"
    ],
    "slug": "webglsamples-org-aquarium-aquarium-html-fishtank"
  },
  {
    "title": "YouTube (Home)",
    "url": "https://www.youtube.com/",
    "category": "Video",
    "types": ["App Scrolling", "Low Power", "App Launch time"],
    "tags": [
      "youtube",
      "video",
      "google"
    ],
    "slug": "www-youtube-com"
  },
  {
    "title": "Prime Video",
    "url": "https://www.primevideo.com/",
    "category": "Video",
    "types": ["App Scrolling", "Low Power", "App Launch time"],
    "tags": [
      "primevideo",
      "video",
      "amazon"
    ],
    "slug": "www-primevideo-com"
  },
  {
    "title": "Netflix",
    "url": "https://www.netflix.com/",
    "category": "Video",
    "types": ["App Scrolling", "Low Power"],
    "tags": [
      "netflix",
      "video"
    ],
    "slug": "www-netflix-com"
  },
  {
    "title": "Facebook",
    "url": "https://www.facebook.com/",
    "category": "Social",
    "types": ["App Scrolling", "App Launch time"],
    "tags": [
      "facebook",
      "social",
      "meta"
    ],
    "slug": "www-facebook-com"
  },
  {
    "title": "X (Twitter)",
    "url": "https://x.com/",
    "category": "Social",
    "types": ["App Scrolling", "App Launch time"],
    "tags": [
      "x",
      "twitter",
      "social"
    ],
    "slug": "x-com"
  },
  {
    "title": "Instagram",
    "url": "https://www.instagram.com/",
    "category": "Social",
    "types": ["App Scrolling"],
    "tags": [
      "instagram",
      "social",
      "meta"
    ],
    "slug": "www-instagram-com"
  },
  {
    "title": "Threads",
    "url": "https://www.threads.net/",
    "category": "Social",
    "types": ["App Scrolling"],
    "tags": [
      "threads",
      "social",
      "meta"
    ],
    "slug": "www-threads-net"
  },
  {
    "title": "Douyin (抖音)",
    "url": "https://www.douyin.com/",
    "category": "Social",
    "types": ["App Scrolling"],
    "tags": [
      "douyin",
      "video",
      "social"
    ],
    "slug": "www-douyin-com"
  },
  {
    "title": "Xiaohongshu (小紅書)",
    "url": "https://www.xiaohongshu.com/",
    "category": "Social",
    "types": ["App Scrolling"],
    "tags": [
      "xiaohongshu",
      "social"
    ],
    "slug": "www-xiaohongshu-com"
  },
  {
    "title": "Bloomberg",
    "url": "https://www.bloomberg.com/",
    "category": "News",
    "types": ["App Scrolling"],
    "tags": [
      "bloomberg",
      "news",
      "finance"
    ],
    "slug": "www-bloomberg-com"
  }
];
