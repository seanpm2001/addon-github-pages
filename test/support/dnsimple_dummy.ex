defmodule GithubPagesConnector.DnsimpleDummy do

  def oauth_authorize_url(state: _state) do
    "https://test.dnsimple.com/auth/authorize?client_id=client_id&state=state"
  end

  def oauth_authorization(code: _code, state: _state) do
    {:ok, "account_id", "access_token"}
  end

end