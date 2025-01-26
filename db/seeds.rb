# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

ImpactCard.create!([
  { card_id: 'CARD001', brand: 'EcoGear', location: 'USA', sponsor: 'EarthFirst', reward: '10% Discount' },
  { card_id: 'CARD002', brand: 'GreenFuture', location: 'Canada', sponsor: 'ClimateCare', reward: 'Free Reusable Bag' },
  { card_id: 'CARD003', brand: 'SustainaHome', location: 'USA', sponsor: 'EarthFirst', reward: '10 Plant Points' },
  { card_id: 'CARD004', brand: 'OceanSave', location: 'UK', sponsor: 'SeaGuard', reward: '10% Discount' },
  { card_id: 'CARD005', brand: 'EcoGrow', location: 'Germany', sponsor: 'BioLife', reward: 'Free Seed Pack' }
])
