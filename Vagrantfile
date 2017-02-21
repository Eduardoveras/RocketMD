# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "base"
  config.vm.box = "ubuntu/xenial64"
  config.vm.box_check_update = false
  config.vm.hostname = "rocketmd"

  config.vm.provider "virtualbox" do |v|
    v.name = "Rocket MD"
    v.memory = 512
    v.cpus = 1
  end

  config.vm.network "forwarded_port", guest: 8100, host: 8100
  # to assign a custom ip in your network
  config.vm.network "public_network", ip: "10.0.1.92"

  config.vm.provision :shell, path: "bootstrap.sh", privileged: false
end
