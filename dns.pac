function FindProxyForURL(url, host) {
      if (
          isPlainHostName(host) ||
              dnsDomainIs(host, ".dns.adguard.com") ||
                  isInNet(host, "192.168.1.1", "255.255.0.0")
                    ) {
                        return "DIRECT";
                          }
                            return "PROXY dns.adguard.com:8080";
                            }
