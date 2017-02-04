class PlainpageController < ApplicationController
  before_action :authenticate_user!


  def index
    @page_title='Dashboard'
    flash[:success ] = "Success Flash Message: Welcome to GentellelaOnRails"
    #other alternatives are
    # flash[:warn ] = "Israel don't quite like warnings"
    #flash[:danger ] = "Naomi let the dog out!"
  end

end
