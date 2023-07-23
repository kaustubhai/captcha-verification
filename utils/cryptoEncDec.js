const crypto = require('crypto')

function sha256Hash(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}

function verifySHA256Hash(data, expectedHash) {
    const hash = sha256Hash(data);
    return hash === expectedHash;
}
  
module.exports = {
    sha256Hash,
    verifySHA256Hash
}