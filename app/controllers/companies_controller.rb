class CompaniesController < ApplicationController
    skip_before_action :authorize

    def index
        companies = Company.all
        render json: companies
    end
end
