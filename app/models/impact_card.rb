class ImpactCard < ApplicationRecord
  validates :card_id, presence: true
  validates :card_id, uniqueness: true
end
