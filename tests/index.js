'use strict';

var X509 = require('../');
var PEM = require('@root/pem');

var ec = {
	crv: 'P-256',
	d: 'LImWxqqTHbP3LHQfqscDSUzf_uNePGqf9U6ETEcO5Ho',
	kty: 'EC',
	x: 'vdjQ3T6VBX82LIKDzepYgRsz3HgRwp83yPuonu6vqos',
	y: 'IUkEXtAMnppnV1A19sE2bJhUo4WPbq6EYgWxma4oGyg',
	kid: 'MnfJYyS9W5gUjrJLdn8ePMzik8ZJz2qc-VZmKOs_oCw'
};
var ecPub = {
	crv: 'P-256',
	kty: 'EC',
	x: 'vdjQ3T6VBX82LIKDzepYgRsz3HgRwp83yPuonu6vqos',
	y: 'IUkEXtAMnppnV1A19sE2bJhUo4WPbq6EYgWxma4oGyg',
	kid: 'MnfJYyS9W5gUjrJLdn8ePMzik8ZJz2qc-VZmKOs_oCw'
};

var rsa = {
	alg: 'RS256',
	d:
		'ETFW_Kx2yUf9DHZaYkYinydcgURY1DA1umkcAwcVVGA7PQtEFXp4Z7EhhA9KZb7CxX0SFALh5PLZLesmkm3oBVonlGeS2kArNHEIAzzGQQzalTjPwfYtIxKsLDUxad05XL0MmGPKAKK8kgLq75EWzvRqkSd2tpfPRzWhu4tOEaaN3zrCklUIG6wueDgxZ0lq3zPzbabKUPzHtKrD_K2CmAs1e0Uh31IwUdAVFeV0cznr6_g2mK-bplSa8pX0nfWKA9J33U43y_XqWINslofBNKqI4XSdTizydGG5K8OTr15LZ8dZzkyE24SwzL5TdwXU084hdxGy2Q2k3Hpe3FatVQ',
	dp:
		'pJ6Vhwkwgb5otzqlM0nPBwuSconUxAScT7xFpcPVR1PnV0f8tFVOYIgdBRbMwsP2bsSkt0bzpHPwMlPgbqDSDPGnMOV0ORyp8rDS3FdjusLSh74448dWRGf-jV9SiKQQV26-wosXASEHVE-DvkXL97oZ3s4hKDlnZBcTtFl50Ik',
	dq:
		'evjNO5Tt1RYad3BoYvQyOsIUpXemEO4ehLwya5OR5a5Bn65ebQOqlCa946AAoifIzHJxIFYohfIpptrzdCSAlJA2Hi_ZxRcMzsi_k9mLLKQA7xZSblwuDzk5G7OrwdqC05YUYH-LmH7QklgLsg7CP-BmSb2_hTKVCghImY6SPQk',
	e: 'AQAB',
	ext: true,
	key_ops: ['sign'],
	kty: 'RSA',
	n:
		'uQ5a9uJ-UBCUWlQ67lo-o0e0F_WTsbbcETtE8trAuz-2jzRh9BqGfKoJqEP2quXGeOSfBEbB4d02nem3RBR-plC-fHrdluj31mK4GrCA5t9OJ2Q5K9xEH3vHkicFy0gbE0NmuSkFSLHmZ7lSD2kTOhAP3_aTjvaxMsv6ShA76XRuwhRwbUj931eOdsBzDBkmqeotu9eNQnUeq9qJsJDp8EgPaKUcKjz3yb8hCWo5LNIpuTLAV9nxNVRCo64WAotY6FSWO_Tb_pfy8YiN0nnFNg_0K2aU9BaRvb0EISA7KTq4IZzXPZGLwPopwmH8I4GB9IF3k0_ohjJBLiAaokkmUQ',
	p:
		'42hRRgBoWqXjY1wR5131O-vOIVPcoiX37ephSoyYOqwgkPTJcpG62p5kwwNCJ0QB9RLJS1aJRcpYVcEu4js1kiJy_jkIGN6t_LZquASThLP0cdbiqsEVCE-0e-zgN4zf-h_IqjkvXilWGJQGa5AIcpoZPKQVUPy00b9ao9SxLKU',
	q:
		'0FLZ2MKPc6G2bMhEa2QF3otpOgKJuYoTGnlo_WfqdksW5U4xEga_PbjxXWI-TAy5lFEjtmj1FP6v5Y-ZZeutGsCwfPnEIdVewoIjym7f1ztDL9a3s_hn8R6PrsUq-718kPP-7or3MvunH31VXWn5B4xQ57AfkjfkV-n-qYglBz0',
	qi:
		'XFSbj_yuhDgDzgIi4uPbCIhIOj9H5gbYv7gDPWsNJEavcZ1gImOrIfFHunOekWuUHl6C_5ARNLf0cGUBJy9Mqj0QSr7L8R04YQUHg4Z9aJ-ISY6Yd_0BdVU1TwtXg0MiClrJQe7KFachIEa7XJO27D6xb0ubI6ZzB1V9VrmmmWY',
	kid: 'MKyL9gVM1vW-dmDkvgyzZxeQr6OlEVj_uX6v0Owe0BQ'
};
var rsaPub = {
	alg: 'RS256',
	e: 'AQAB',
	ext: true,
	key_ops: ['sign'],
	kty: 'RSA',
	n:
		'uQ5a9uJ-UBCUWlQ67lo-o0e0F_WTsbbcETtE8trAuz-2jzRh9BqGfKoJqEP2quXGeOSfBEbB4d02nem3RBR-plC-fHrdluj31mK4GrCA5t9OJ2Q5K9xEH3vHkicFy0gbE0NmuSkFSLHmZ7lSD2kTOhAP3_aTjvaxMsv6ShA76XRuwhRwbUj931eOdsBzDBkmqeotu9eNQnUeq9qJsJDp8EgPaKUcKjz3yb8hCWo5LNIpuTLAV9nxNVRCo64WAotY6FSWO_Tb_pfy8YiN0nnFNg_0K2aU9BaRvb0EISA7KTq4IZzXPZGLwPopwmH8I4GB9IF3k0_ohjJBLiAaokkmUQ',
	kid: 'MKyL9gVM1vW-dmDkvgyzZxeQr6OlEVj_uX6v0Owe0BQ'
};

function log(pem) {
	//console.log(pem);
}

var rsaPrivPkcs1 = PEM.packBlock({
	type: 'RSA PRIVATE KEY',
	bytes: X509.packPkcs1(rsa)
});
log(rsaPrivPkcs1);

var rsaPubPkcs1 = PEM.packBlock({
	type: 'RSA PUBLIC KEY',
	bytes: X509.packPkcs1(rsaPub)
});
log(rsaPubPkcs1);

var ecPrivSec1 = PEM.packBlock({
	type: 'EC PRIVATE KEY',
	bytes: X509.packSec1(ec)
});
log(ecPrivSec1);

var rsaPrivPkcs8 = PEM.packBlock({
	type: 'PRIVATE KEY (RSA)',
	bytes: X509.packPkcs8(rsa)
});
log(rsaPrivPkcs8);

var ecPrivPkcs8 = PEM.packBlock({
	type: 'PRIVATE KEY (EC)',
	bytes: X509.packPkcs8(ec)
});
log(ecPrivPkcs8);

var rsaPubSpki = PEM.packBlock({
	type: 'PUBLIC KEY (RSA)',
	bytes: X509.packSpki(rsaPub)
});
log(rsaPubSpki);

var ecPubSpki = PEM.packBlock({
	type: 'PUBLIC KEY (EC)',
	bytes: X509.packSpki(ecPub)
});
log(ecPubSpki);

var rsaPubCsr = PEM.packBlock({
	type: '(CSR-Embeddable) PUBLIC KEY (RSA)',
	bytes: X509.packCsrRsaPublicKey(rsaPub)
});
log(rsaPubCsr);

var ecPubCsr = ecPubCsr;
log(
	PEM.packBlock({
		type: '(CSR-Embeddable) PUBLIC KEY (EC)',
		bytes: X509.packCsrEcPublicKey(ecPub)
	})
);

console.info('PASS: Packed all possible formats');

if (
	rsaPrivPkcs1 !==
	PEM.packBlock({
		type: 'RSA PRIVATE KEY',
		bytes: X509.packPkcs1(
			X509.parsePkcs1(PEM.parseBlock(rsaPrivPkcs1).bytes, {})
		)
	})
) {
	throw new Error('Fail packPrivPkcs1 Private');
}

if (
	rsaPubPkcs1 !==
	PEM.packBlock({
		type: 'RSA PUBLIC KEY',
		bytes: X509.packPkcs1(
			X509.parsePkcs1(PEM.parseBlock(rsaPubPkcs1).bytes, {})
		)
	})
) {
	throw new Error('Fail packPubPkcs1 Private');
}

if (
	ecPrivSec1 !==
	PEM.packBlock({
		type: 'EC PRIVATE KEY',
		bytes: X509.packSec1(
			X509.parseSec1(PEM.parseBlock(ecPrivSec1).bytes, {})
		)
	})
) {
	throw new Error('FAIL packSec1');
}

if (
	rsaPrivPkcs8 !==
	PEM.packBlock({
		type: 'PRIVATE KEY (RSA)',
		bytes: X509.packPkcs8(
			X509.parsePkcs8(PEM.parseBlock(rsaPrivPkcs8).bytes, {})
		)
	})
) {
	throw new Error('FAIL packRsaPrivPkcs8');
}

if (
	ecPrivPkcs8 !==
	PEM.packBlock({
		type: 'PRIVATE KEY (EC)',
		bytes: X509.packPkcs8(
			X509.parsePkcs8(PEM.parseBlock(ecPrivPkcs8).bytes, {})
		)
	})
) {
	throw new Error('FAIL packEcPrivPkcs8');
}

if (
	rsaPubSpki !==
	PEM.packBlock({
		type: 'PUBLIC KEY (RSA)',
		bytes: X509.packSpki(
			X509.parseSpki(PEM.parseBlock(rsaPubSpki).bytes, {})
		)
	})
) {
	throw new Error('FAIL packRsaPubSpki');
}

if (
	ecPubSpki !==
	PEM.packBlock({
		type: 'PUBLIC KEY (EC)',
		bytes: X509.packSpki(
			X509.parseSpki(PEM.parseBlock(ecPubSpki).bytes, {})
		)
	})
) {
	throw new Error('FAIL packEcPubSpki');
}

console.info('PASS: Parsed all possible formats');
