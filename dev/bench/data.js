window.BENCHMARK_DATA = {
  "lastUpdate": 1693325676853,
  "repoUrl": "https://github.com/ChinYikMing/gh-pg-test",
  "entries": {
    "My Project Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "yikming2222@gmail.com",
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "email": "yikming2222@gmail.com",
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "distinct": true,
          "id": "6684f74250ccc3cb7c066fb1e50d115bfec3f0b6",
          "message": "add go test",
          "timestamp": "2023-08-30T00:14:05+08:00",
          "tree_id": "918de6fcd1651ba6ec088d7b334f8e3dc0e802eb",
          "url": "https://github.com/ChinYikMing/gh-pg-test/commit/6684f74250ccc3cb7c066fb1e50d115bfec3f0b6"
        },
        "date": 1693325676150,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 330.9,
            "unit": "ns/op",
            "extra": "3616678 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 40967,
            "unit": "ns/op",
            "extra": "29259 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - ns/op",
            "value": 41023,
            "unit": "ns/op",
            "extra": "29276 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - auxMetricUnits",
            "value": 4,
            "unit": "auxMetricUnits",
            "extra": "29276 times\n2 procs"
          }
        ]
      }
    ]
  }
}