var rule={
  title: "111tv",
  模板: "自动",
  host: "https://www.111tv.one",
  url: "/vodshow/fyfilter.html",
  filterable: 1,
  filter: "H4sIAAAAAAAAA+2ba08bRxSG/8t+aiUqeW3MJd9C7vf7tcqHtEIqappKTVqpipAAY2NMsAEBDsGBNuDYUHyBENfYXfgze/O/6Npz5pyzrRQ5hbTQzIdIeZ93d3ZnZmfOq3HyTAsGtGNfPtO+7f9ZO6Y5m3VraULr0B4//K6f658ePvqxv3XhYw9b0Xwjkm9iT3gNDHYI7sy+c3Mxazz3Wd/Ao4GvvD+fw0VdOl5kLRpmLeddJO8nq7G8xniQ2t1NMh6iplJlxjuR29US4z3E01nGw8jNasaaTJu1l8ztoqdEK2Z9HvsmL+jWBh80LxEj5xl2JEojh/o9I0dPmM9QwyCw7/FNaIgE9md4yh6aBw8EtpnIm0ZGtikEtpmbtnbqsk0h8D58cRL4vPgLszYunyeE9NzCG+v5Ongg8HmJkmNIDwTN4aq7gs8TAr+HVzP2i6w1XLEiKbjCh7CNYsWqFWQbQqCXHaO+gkAvGbNSW9ITAt+5nrKiVfnOQuD3svOr/WoaPBA4RpGovVCSYyQEPm8u5o2afJ4Q/CNySwU3P0QfEeq2PqJFw7teNi4ETs7EJnkgsKNbq+SBwAlIG97CIJs0W7LMFoItN/JAsEVlFSPybYXwraedbbNusPUkdTtDEQx4m4Hcndi+4IkQ8RDnQeJBznXiOucB4gHG9V7k3l8Z7yHew3k38W7Ou4h3cR4mHuac+qvz/urUX533V6f+6ry/OvVX5/3Vqb8672+A+uv91TeBhbRdmmQTKPVfJhAxn8DjAI4j6QPSh+QEkBNITgI5ieQUkFNITgM5jeQMkDNIzgI5i+QckHNIzgM5j+QCkAtILgK5iOQSkEtILgO5jOQKkCtIrgK5iuQakGtIrgO5juQGkBtIbgK5ieQWkFtIbgO5jeQOkDtI7gK5i+QekHtI7gO5jyTwhfxWAr4PxU7OWLUUfSio/R+Kna400ttkeujpgHcD7sm1ml2e9fnfDDx9QltgadSKx3z+k6+//6G/+S4POrRg735jEC13UW2d8TGwQrRiRHFnFi0yUduZxfJPq0Qzi5ayqPrMotUvijezaMMQtZtZtMe4xbJlzDGLtiUvAlnG5t+zHXXPjiTskZd0cxfrQ6vsM4vFuNhMY2GNWSzJjWw489PMCqvUdSCpK5F3Zuv0nk3RTmKyC2/M3V/kuwjhn0Z5nxB439I6JR8Q7YynmH/pCeH/2DBptUQ76U1ESF+epDbnx9zxmmxTCOzfblGsANlF1O1k2fdlTXdvypsDOYtC0KhmKGuCQG90z/lN9gQEjoAx7dQzvhf2oU80d9pv55gnBE3w76wnQtB9ZX5fWWVZlWVVllVZ9jBm2VDPPrNsiJa1tZprLMSc+h9UFkO0GTQP2lJln9vJ0mA66+3MfpcWor2Rc3aTfjd4cOmuMTTu5IZkgRCCkkPUHl3G5NASlH/33HJcliwh8L6Zgp2Q9RYEdTZqV2XiAEHF6q25M4XFqiWwDO4mGyvyXUCgV1u3ikvSEwKft7jFkooQFNSX7W1MmkLQlFXteMqszVDi8CEch+3XXm6S4yAEtrE54g4/l3cL8YnmCVX7NVX7NVX7Ve0/HLW/M7TP2t/JzpbSWTuz4Tsq6GRHM6367XdpKcOvfD6XNgCRG/wubRviBze/S5uNM7dOxzbhXnUepM6DZKpT50HqPOgD85s6D1KZUGVClQn/15mQ/7apIpKKSCoiqYh0yCOSqrCqwh6dChvWVYVVFVZVWFVhj06FVYcQkqtDCE1FJBWRPnJECu7zh6kwLSMrNekaG07cYD8E8f8V1qxxZn2BQkGY/WyVrjhrNWdtz60kpEsL3R2dtreXfAU+TNuDkyyb9ZVGxLCqI9KlTaUx8s4up3zFLdxzkP+gJea+xuIiBHqZqj0k0xEIfOnhsuXlurwMOqRxwMopK1txJtKyWqDGNmYzVlEOJoj/KrH+66n0YyRPlS7/Ybr8kASpKqSqkNpRqZCDfwJ6OpVDiz0AAA==",
  filter_url: "{{fl.类型}}--{{fl.排序}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}",
  filter_def: {
    20: {
      类型: "20"
    },
    29: {
      类型: "29"
    },
    38: {
      类型: "38"
    },
    43: {
      类型: "43"
    },
    49: {
      类型: "49"
    },
    51: {
      类型: "51"
    },
    52: {
      类型: "52"
    }
  },
  class_parse: ".navbar-items&&li;a&&Text;a&&href;.*/(\\d+).html",
    搜索: ".module-items&&.module-item;strong&&Text;img&&data-original;.module-item-note&&Text;a&&href;.module-card-item-info--strong&&Text",
}
