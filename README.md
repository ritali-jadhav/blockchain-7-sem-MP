🔗 Land Registry Using BlockchainWatch the Live Demo 📺Read the Case Study Report 📝Research Papers Referred 📚🌍 OverviewThe Land Registry Using Blockchain project aims to revolutionize the traditional land registration process by leveraging blockchain technology. This decentralized solution ensures transparency, immutability, and security in property transactions, addressing issues like inefficiency, fraud, and ownership disputes.

✨ Features
Decentralized Land Records: Transactions and ownership details are stored securely on a blockchain, ensuring transparency and reducing the risk of tampering.
Smart Contracts: Automates and verifies land transfers, reducing the need for intermediaries.
Immutable Ledger: Ensures all transaction records are tamper-proof.
User-Friendly Interface: Simplifies interaction for landowners, buyers, and government officials.
Enhanced Security: Data encryption and blockchain technology ensure secure transactions.
Admin Panel: Special administrative privileges to view all registered lands and track past ownership history.

📈 Benefits
Eliminates fraudulent activities in land registration.
Reduces delays and paperwork in property transactions.
Provides a transparent and easily accessible history of land ownership.
Enhances trust among stakeholders by using a decentralized ledger.

💻 Technology Stack
Blockchain: Ethereum
Smart Contracts: Solidity
Front-end: React.js, Bootstrap, CSS
Back-end: Node.js, Web3.js
Development Framework: TruffleLocal Blockchain: GanacheAPI/Node Provider: Alchemy (for testnet/mainnet deployment)
Wallet: Metamask

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running for development and testing.

✅ PrerequisitesNode.js (v16 or later)Truffle (npm install -g truffle)Ganache (Local blockchain GUI)Metamask (Browser extension)🛠️ Installation & SetupClone the Repositorygit clone [https://github.com/your-username/landregistration.git](https://github.com/your-username/landregistration.git)
cd landregistration
Install Dependencies (Root)This installs Truffle and other smart contract dependencies.npm install
Install Dependencies (Front-end)cd front-end
npm install
Launch GanacheOpen your Ganache application. This will start a local blockchain instance, typically at http://127.0.0.1:7545.Compile & Migrate Smart ContractsGo back to the root directory and run:truffle compile
truffle migrate --reset
This will deploy your LandRegistry.sol contract to the local Ganache blockchain.Configure MetamaskAdd Ganache as a custom network:Network Name: Ganache LocalRPC URL: http://1.0.0.1:7545Chain ID: 1337Import accounts from Ganache into Metamask using their private keys. Make sure to import at least two accounts (for "User 1" and "User 2") to test the transfer functionality.Note: By default, the first account in Ganache (Account 0) is often the contract deployer and may have admin privileges.Run the React ApplicationIn the front-end directory:npm start
Your application should now be running in your browser, likely at http://localhost:3000.

📖 Usage / Project Flow
Here is a step-by-step flow of how to use the application, based on the project demo:
Connect Wallet: The app will prompt you to connect your Metamask wallet. 
Connect with User 1 (your first imported Ganache account).
Register a New Land (as User 1)
Navigate to the Manage Land page.
Fill in the details for a new property (Plot Number, Area, District, State, Price).
Click "Register Land" and approve the transaction in Metamask.
A "Land Registered Successfully" message will appear.
View Owned Lands
Go to the "Show My Lands" page.
You will see the new land (e.g., Land ID 1) listed, showing User 1's address as the owner.
List Land for Sale (as User 1)
On the "Show My Lands" page, find the land you want to sell.
Click the "Put for Sale" button and approve the transaction.
The land is now marked for sale.Switch to User 2
Open Metamask and switch your active account to User 2 (your second imported Ganache account).
The web page will refresh, now showing User 2's perspective.E
xplore and Request Land (as User 2)
Navigate to the "Explore Lands" page. 
You will see Land ID 1 listed as available for sale.
As User 2, go to the "Verify Land" (or similar) section and enter "1" to see the details.
Click the "Request Transfer" button and approve the transaction. A request is now submitted.Approve Transfer (as User 1)Switch back to User 1 in Metamask.
Go to the "Approve Transfer" page.
You will see a pending request from User 2's address for Land ID 1.
Click "Approve" and confirm the transaction.
This executes the ownership change.Verify Final OwnershipAs User 1: Go to "Show My Lands". The list will now be empty, as the land has been transferred.
As User 2: Switch to User 2 in Metamask.
Go to "Show My Lands". Land ID 1 will now appear, with User 2 as the new owner.
Admin Panel (Optional)Log in with the Admin account (likely User 1 in this demo).
Navigate to the Admin Panel."Show Lands": Displays all lands registered on the blockchain, regardless of owner."Past Ownership Details": Enter a Land ID (e.g., "1") to see a complete, chronological history of its owners.<details>


<summary>Click to view Project Structure 📂</summary>landregistration/
├── contracts/
│   └── LandRegistry.sol
├── front-end/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AboutPage.js
│   │   │   ├── AdminPanel.js
│   │   │   ├── ContactPage.js
│   │   │   ├── FeaturesPage.js
│   │   │   ├── Footer.js
│   │   │   ├── LandingPage.js
│   │   │   ├── ManageLandPage.js
│   │   │   ├── Navbar.js
│   │   │   └── WalletContext.js
│   │   ├── contracts/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
├── migrations/
│   └── 2_deploy_landregistry.js
├── package.json
└── truffle-config.js
</details>
