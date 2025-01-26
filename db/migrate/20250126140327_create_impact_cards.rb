class CreateImpactCards < ActiveRecord::Migration[8.0]
  def change
    create_table :impact_cards do |t|
      t.string :card_id
      t.string :brand
      t.string :location
      t.string :sponsor
      t.string :reward

      t.timestamps
    end
  end
end
