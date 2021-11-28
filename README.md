# mailcow: dockerized - 🐮 + 🐋 = 💕

[![Mailcow Integration Tests](https://github.com/mailcow/mailcow-dockerized/actions/workflows/integration_tests.yml/badge.svg?branch=master)](https://github.com/mailcow/mailcow-dockerized/actions/workflows/integration_tests.yml)
[![Translation status](https://translate.mailcow.email/widgets/mailcow-dockerized/-/translation/svg-badge.svg)](https://translate.mailcow.email/engage/mailcow-dockerized/)
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/mailcow_email.svg?style=social&label=Follow%20%40mailcow_email)](https://twitter.com/mailcow_email)

## Want to support mailcow?

Please [consider a support contract with Servercow](https://www.servercow.de/mailcow?lang=en#support) to support further development. _We_ support _you_ while _you_ support _us_. :)

You can also [get a SAL](https://www.servercow.de/mailcow?lang=en#sal) which is a one-time payment with no liabilities or returning fees.

Or just spread the word: moo.

## Info, documentation and support

Please see [the official documentation](https://mailcow.github.io/mailcow-dockerized-docs/) for installation and support instructions. 🐄

🐛 **If you found a critical security issue, please mail us to [info at servercow.de](mailto:info@servercow.de).**

## Cowmunity

[mailcow community](https://community.mailcow.email)

[Telegram mailcow channel](https://telegram.me/mailcow)

[Telegram mailcow Off-Topic channel](https://t.me/mailcowOfftopic)

[Official Twitter Account](https://twitter.com/mailcow_email)

Telegram desktop clients are available for [multiple platforms](https://desktop.telegram.org). You can search the groups history for keywords.

## Misc

**Important**: mailcow makes use of various open-source software. Please assure you agree with their license before using mailcow.
Any part of mailcow itself is released under **GNU General Public License, Version 3**.

mailcow is a registered word mark of The Infrastructure Company GmbH, Parkstr. 42, 47877 Willich, Germany.

The project is managed and maintained by The Infrastructure Company GmbH.

Originated from @andryyy (André)

## Docker daemon config

`# nano /etc/docker/daemon.json`

```
{
    "storage-driver": "overlay2",
    "live-restore": true
}
```

```
systemctl enable docker
systemctl start docker
```

## Required sysctl params

`# nano /etc/sysctl.conf`

```
net.ipv4.ip_forward=1
net.ipv6.conf.all.forwarding = 1
vm.overcommit_memory=1
net.core.somaxconn=2048
net.ipv4.tcp_max_syn_backlog=512
vm.swappiness = 0
fs.inotify.max_user_watches = 4096
fs.inotify.max_user_instances = 4096
vm.max_map_count=262144
net.bridge.bridge-nf-call-iptables=1
net.bridge.bridge-nf-call-ip6tables=1
```

`# sysctl -p`

## How to initialize

```
systemctl stop firewalld postfix
systemctl disable firewalld postfix
./generate_config.sh
docker-compose pull
docker-compose up -d
```

## FeldHost upgrade procedure

1. `git fetch origin`
2. `git checkout feldhost-new`
3. `./update.sh --rebase`
