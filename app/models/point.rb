class Point < ActiveRecord::Base
  has_and_belongs_to_many :trips
end
