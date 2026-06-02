class ApiClient {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;
  }

  async getBalance(playerId) {
    console.log("Request balance");
  }

  async createDeposit(data) {
    console.log("Create deposit");
  }
}

module.exports = ApiClient;
