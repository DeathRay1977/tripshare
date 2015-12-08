# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#

  Trip.create(name: 'Wild Weekend', location: 'Everywhere')
  points = Point.create([{ name: 'A relaxing few days', location: 'Chicago', trip_id: 1},
                         { name: 'Cheeky one', location: 'Amsterdam', trip_id: 1 },
                         { name: 'Nandos', location: 'Manchester', trip_id: 1 }])