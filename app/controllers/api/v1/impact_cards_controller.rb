class Api::V1::ImpactCardsController < ApplicationController
  def index
    cards = ImpactCard.all
    cards = cards.where(brand: params[:brand]) if params[:brand].present?
    cards = cards.where(location: params[:location]) if params[:location].present?
    cards = cards.where(sponsor: params[:sponsor]) if params[:sponsor].present?
    cards = cards.where(reward: params[:reward]) if params[:reward].present?

    render json: cards
  end
end
