const fs = require('fs')
const path = require('path')
const { NodeSSH } = require('node-ssh')

const {
  HOST,
  SSHKEY,
  PORT,
  USER,
} = process.env;
console.log(HOST, SSHKEY, PORT, USER);

const ssh = new NodeSSH();

ssh.connect({
  host: HOST,
  username: USER,
  privateKey: SSHKEY,
}).then(() => {
  ssh.execCommand('ls -a', { cwd:'/root/' }).then(function(result) {
    console.log('STDOUT: ' + result.stdout)
    console.log('STDERR: ' + result.stderr)
    ssh.dispose();
  });
});