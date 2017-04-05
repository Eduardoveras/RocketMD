# RocketMD
This is the new version of Clinic Helper, now written on ruby on rails

Versions
------------------------------------
- Rails 5
- ruby 2.3.1
- Gentelella 1.1.0

###Setup:
 1. Install PostgreSQL, process varies depending to OS, version 9 and up are good
 2. If asked for the postgress pasword, set it to "postgres"
 3. Run the following command in the psql console: "CREATE USER eduardo WITH PASSWORD 'welc0me' CREATEDB' (The user and pass may change in the future)
 4. If you are on linux, install rbenv and set it up to use ruby 2.3.1 (Google), if you are on windows, install directly ruby 2.3.1
 5. Clone the repository to your computer
 6. Open the terminal, cd into the repository folder and run 'bundle install' and then run 'rake db:setup', this will install and update all the gems, and create the database and run all the migrations.
 7. Open RubyMine of your favorite IDE/Editor an run 'rails s'
 
 
###Or use vagrant:
 1. Install vagrant and virtualbox
 2. vagrant plugin install vagrant-vbguest
 3. vagrant plugin install vagrant-librarian-chef-nochef
 4. vagrant up
 5. vagrant ssh
 6. cd /vagrant
 7. bundle
 8. rake db:create && rake db:migrate
 9. rails s


That's it! Your app is running

Navigate to   http://localhost:3000
