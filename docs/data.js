window.BENCHMARK_DATA = {
  "lastUpdate": 1693326340185,
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
          "id": "3af3d67e78dcdbdadeae64a021d0bfcae99a0069",
          "message": "add go test",
          "timestamp": "2023-08-30T00:25:01+08:00",
          "tree_id": "ab97e2e1be44bf80fdc854942677ae892d705a16",
          "url": "https://github.com/ChinYikMing/gh-pg-test/commit/3af3d67e78dcdbdadeae64a021d0bfcae99a0069"
        },
        "date": 1693326339712,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 391.6,
            "unit": "ns/op",
            "extra": "2958393 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 48750,
            "unit": "ns/op",
            "extra": "23910 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - ns/op",
            "value": 49273,
            "unit": "ns/op",
            "extra": "23780 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - auxMetricUnits",
            "value": 4,
            "unit": "auxMetricUnits",
            "extra": "23780 times\n2 procs"
          }
        ]
      }
    ]
  }
}