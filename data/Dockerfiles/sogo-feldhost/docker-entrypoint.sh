#!/bin/bash

if [[ "${SKIP_SOGO}" =~ ^([yY][eE][sS]|[yY])+$ ]]; then
  echo "SKIP_SOGO=y, skipping SOGo..."
  sleep 365d
  exit 0
fi

sed -i 's/sogo-full.svg/custom-logo.png/g' /usr/lib/GNUstep/SOGo/Templates/MainUI/SOGoRootPage.wox

if [[ ! -z ${REDIS_SLAVEOF_IP} ]]; then
  cp /etc/syslog-ng/syslog-ng-redis_slave.conf /etc/syslog-ng/syslog-ng.conf
fi

exec "$@"
