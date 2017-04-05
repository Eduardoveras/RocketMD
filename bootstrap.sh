#!/usr/bin/env bash

echo -e "*************************************************************"
echo -e "************       Installing Postgresql        *************"
echo -e "*************************************************************"
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y install postgresql postgresql-contrib


echo -e "*************************************************************"
echo -e "************          Creating DB USER          *************"
echo -e "*************************************************************"
echo -e "User: " $USER ""
sudo -u postgres psql -c "CREATE USER rocketmd WITH PASSWORD 'welc0me' CREATEDB"


echo -e "*************************************************************"
echo -e "************   Installing System Requirements   *************"
echo -e "*************************************************************"
sudo apt-get -y install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev
sudo apt-get -y install zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev nodejs


echo -e "*************************************************************"
echo -e "************     Installing Ruby and Rails      *************"
echo -e "*************************************************************"
# Cloning Repositories and adding to Environment
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc

# Install ruby-build
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

source ~/.bashrc
exec bash

# Install and use ruby 2.0.0-rc2
rbenv install 2.3.1
rbenv global 2.3.1

echo "gem: --no-document" > ~/.gemrc
gem install bundler
gem install rails
rbenv rehash
gem install execjs
