function FindProxyForURL(url, host) {
      if (
          isPlainHostName(host) ||
              dnsDomainIs(host, ".192.168.1.1.com") ||
                  isInNet(host, "192.168.1.1", "255.255.0.0")
                    ) {
                        return "DIRECT";
                          }
                            return "PROXY proxy.192.168.1.1.com:8080";
                            }
