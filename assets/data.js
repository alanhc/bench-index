const BENCHMARKS = [
  {
    "title": "BrowserLeaks – WebGL",
    "url": "https://browserleaks.com/webgl",
    "category": "GPU / WebGL",
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
    "tags": [
      "alanhc"
    ],
    "slug": "alanhc-github-io-browser-test"
  },
  {
    "title": "alanhc – JetStream",
    "url": "https://alanhc.github.io/jet-stream/",
    "category": "JS Bench",
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
    "tags": [
      "webxprt"
    ],
    "slug": "www-principledtechnologies-com-benchmarkxprt-webxprt-2021-wx"
  },
  {
    "title": "WebGPU Samples – Animometer",
    "url": "https://webgpu.github.io/webgpu-samples/?sample=animometer",
    "category": "WebGPU",
    "tags": [
      "webgpu"
    ],
    "slug": "webgpu-github-io-webgpu-samples-sample-animometer"
  },
  {
    "title": "Nova Web",
    "url": "https://ajlaston.github.io/Nova-Web/",
    "category": "Graphics Bench",
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
    "tags": [
      "webgpu"
    ],
    "slug": "toji-github-io-webgpu-test"
  },
  {
    "title": "Fractal Benchmark",
    "url": "https://samrat079.github.io/Fractal_Benchmark/",
    "category": "Graphics Bench",
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
    "tags": [
      "kraken",
      "js"
    ],
    "slug": "mozilla-github-io-krakenbenchmark-mozilla-org-kraken-1-1-dri"
  },
  {
    "title": "WASM CoreMark (wasm3)",
    "url": "https://wasm3.github.io/wasm-coremark/coremark-minimal.html",
    "category": "WASM",
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
    "tags": [
      "cpu"
    ],
    "slug": "cpux-net-cpu-benchmark-online"
  },
  {
    "title": "silver.urih.com",
    "url": "https://silver.urih.com/",
    "category": "Misc",
    "tags": [
      "misc"
    ],
    "slug": "silver-urih-com"
  },
  {
    "title": "WebGPU Atomics Benchmark",
    "url": "https://pwhiddy.github.io/webgpu-atomics-benchmark/",
    "category": "WebGPU",
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
    "tags": [
      "basemark"
    ],
    "slug": "web-basemark-com"
  },
  {
    "title": "theinfo.dev – GPU Benchmark",
    "url": "https://theinfo.dev/gpu-benchmark",
    "category": "GPU / Benchmark",
    "tags": [
      "gpu",
      "benchmark"
    ],
    "slug": "theinfo-dev-gpu-benchmark"
  },
  {
    "title": "WebGL Aquarium",
    "url": "https://webglsamples.org/aquarium/aquarium.html",
    "category": "GPU / WebGL",
    "tags": [
      "aquarium",
      "webgl"
    ],
    "slug": "webglsamples-org-aquarium-aquarium-html"
  },
  {
    "title": "YouTube – VzoqgEsmUjY",
    "url": "https://www.youtube.com/watch?v=VzoqgEsmUjY",
    "category": "Video",
    "tags": [
      "youtube"
    ],
    "slug": "www-youtube-com-watch-v-vzoqgesmujy"
  },
  {
    "title": "YouTube – rFVpSwgCkCo",
    "url": "https://www.youtube.com/watch?v=rFVpSwgCkCo",
    "category": "Video",
    "tags": [
      "youtube"
    ],
    "slug": "www-youtube-com-watch-v-rfvpswgckco"
  },
  {
    "title": "YOLO ONNX Benchmark (Web)",
    "url": "https://nomi30701.github.io/yolo-onnx-benchmark-web/",
    "category": "AI / Web",
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
    "tags": [
      "tfjs"
    ],
    "slug": "www-videogames-ai-tensorflow-js-benchmark"
  },
  {
    "title": "TFJS Benchmarks (local-benchmark)",
    "url": "https://tfjs-benchmarks.web.app/local-benchmark/",
    "category": "AI / Web",
    "tags": [
      "tfjs"
    ],
    "slug": "tfjs-benchmarks-web-app-local-benchmark"
  }
];
