window.BENCHMARK_DATA = {
  "lastUpdate": 1779490579516,
  "repoUrl": "https://github.com/giltho/soteria",
  "entries": {
    "Soteria benchmarks (PR #2)": [
      {
        "commit": {
          "author": {
            "name": "Sacha Ayoun",
            "username": "giltho",
            "email": "sachaayoun@gmail.com"
          },
          "committer": {
            "name": "Sacha Ayoun",
            "username": "giltho",
            "email": "sachaayoun@gmail.com"
          },
          "id": "b49395191f6cdaf2711857081af40d13aebc8d42",
          "message": "Fix tests\n\nSigned-off-by: Sacha Ayoun <sachaayoun@gmail.com>",
          "timestamp": "2026-05-22T16:13:18Z",
          "url": "https://github.com/giltho/soteria/commit/b49395191f6cdaf2711857081af40d13aebc8d42"
        },
        "date": 1779490578555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rust-file: write-a-lot",
            "value": 0.07758978516000001,
            "range": "± 0.0026",
            "unit": "s"
          },
          {
            "name": "rust-file: write-a-lot (for loop)",
            "value": 351.7236718525801,
            "range": "± 1.2248",
            "unit": "s"
          },
          {
            "name": "rust-file: ctpop",
            "value": 1.9455509835599998,
            "range": "± 0.0170",
            "unit": "s"
          },
          {
            "name": "rust-file: array_init (rust)",
            "value": 0.80074863488,
            "range": "± 0.0030",
            "unit": "s"
          },
          {
            "name": "c: array_init (c)",
            "value": 2.28179861782,
            "range": "± 0.0233",
            "unit": "s"
          },
          {
            "name": "c-capture-db: Collections-C",
            "value": 9.679901722993236,
            "unit": "s"
          }
        ]
      }
    ]
  }
}