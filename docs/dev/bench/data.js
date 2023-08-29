window.BENCHMARK_DATA = {
  "lastUpdate": 1693326190494,
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
          "id": "35f2b1c77dd88f81456f5efb491d816cde64943d",
          "message": "add go test",
          "timestamp": "2023-08-30T00:22:42+08:00",
          "tree_id": "9643d119ff74f6749be6e43ec2ec7add850cfcf6",
          "url": "https://github.com/ChinYikMing/gh-pg-test/commit/35f2b1c77dd88f81456f5efb491d816cde64943d"
        },
        "date": 1693326190003,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 405.5,
            "unit": "ns/op",
            "extra": "2956820 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 50243,
            "unit": "ns/op",
            "extra": "23874 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - ns/op",
            "value": 50415,
            "unit": "ns/op",
            "extra": "23883 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - auxMetricUnits",
            "value": 4,
            "unit": "auxMetricUnits",
            "extra": "23883 times\n2 procs"
          }
        ]
      }
    ]
  }
}