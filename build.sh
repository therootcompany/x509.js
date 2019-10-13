#!/bin/bash
set -e
set -u

# TODO convert to JS
cat parsers.js packers.js > all.tmp.js
sed -i '' '/use strict/d' all.tmp.js
sed -i '' '/require/d' all.tmp.js
sed -i '' '/exports/d' all.tmp.js

echo ';(function () {' > dist/x509.js
echo "'use strict';" >> dist/x509.js
echo "var X509 = window.X509 = {};" >> dist/x509.js
echo "var ASN1 = window.ASN1;" >> dist/x509.js
echo "var Enc = window.Encoding;" >> dist/x509.js
cat all.tmp.js >> dist/x509.js
rm all.tmp.js
echo '}());' >> dist/x509.js

rm -f dist/*.gz

uglifyjs dist/x509.js > dist/x509.min.js
gzip dist/x509.min.js
uglifyjs dist/x509.js > dist/x509.min.js

cat node_modules/@root/asn1/dist/asn1.all.js >> all.js
cat dist/x509.js >> all.js
mv all.js dist/x509.all.js

uglifyjs dist/x509.all.js > dist/x509.all.min.js
gzip dist/x509.all.min.js
uglifyjs dist/x509.all.js > dist/x509.all.min.js
