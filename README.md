# 🔗 Land Registry Using Blockchain

### 🎥 [Watch the Live Demo](https://drive.google.com/file/d/1_si5nWdvpG2evHxAAFyl29sMKB34ycbE/view?usp=drive_link)  
### 📝 [Read the Case Study Report](https://drive.google.com/file/d/1j9L0Vv5B29GaGJLtnR06oHkz-RB6Vvg_/view?usp=drive_link)  
### 📚 [Research Papers Referred](https://drive.google.com/drive/folders/1b2FrFYPBqw28HMnyf2MH0kjiCd73R8jl?usp=drive_lin)

---

## 🌍 Overview

The **Land Registry Using Blockchain** project aims to revolutionize the traditional land registration process by leveraging **blockchain technology**.  
This decentralized solution ensures **transparency**, **immutability**, and **security** in property transactions, addressing issues like inefficiency, fraud, and ownership disputes.

---

## ✨ Features

- **Decentralized Land Records:** Transactions and ownership details are stored securely on blockchain, ensuring transparency and reducing the risk of tampering.  
- **Smart Contracts:** Automates and verifies land transfers, reducing the need for intermediaries.  
- **Immutable Ledger:** Ensures all transaction records are tamper-proof.  
- **User-Friendly Interface:** Simplifies interaction for landowners, buyers, and government officials.  
- **Enhanced Security:** Data encryption and blockchain technology ensure secure transactions.  
- **Admin Panel:** Special administrative privileges to view all registered lands and track past ownership history.

---

## 📈 Benefits

- Eliminates fraudulent activities in land registration.  
- Reduces delays and paperwork in property transactions.  
- Provides a transparent and easily accessible history of land ownership.  
- Enhances trust among stakeholders using a decentralized ledger.

---

## 💻 Technology Stack

| Layer | Technology Used |
|--------|----------------|
| **Blockchain** | Ethereum |
| **Smart Contracts** | Solidity |
| **Front-end** | React.js, Bootstrap, CSS |
| **Back-end** | Node.js, Web3.js |
| **Development Framework** | Truffle |
| **Local Blockchain** | Ganache |
| **API/Node Provider** | Alchemy (for testnet/mainnet deployment) |
| **Wallet** | Metamask |

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing.

---

### ✅ Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) (v16 or later)  
- Truffle → `npm install -g truffle`  
- [Ganache](https://trufflesuite.com/ganache/) (Local blockchain GUI)  
- [Metamask](https://metamask.io/) (Browser extension)

---

### 🛠️ Installation & Setup

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/landregistration.git
cd landregistration

Perfect 👍 Here’s **everything from “Install Dependencies” till the very end**, formatted cleanly for GitHub Markdown — just **copy and paste this whole block** into your `README.md` file, and it will look perfect (with collapsible sections, emojis, and clean code formatting).

---

````markdown
### 🛠️ Installation & Setup

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/landregistration.git
cd landregistration
````

#### 2️⃣ Install Dependencies (Root)

```bash
npm install
```

#### 3️⃣ Install Dependencies (Front-end)

```bash
cd front-end
npm install
```

#### 4️⃣ Launch Ganache

Open your **Ganache** application.
This will start a local blockchain instance, typically at:
`http://127.0.0.1:7545`

#### 5️⃣ Compile & Migrate Smart Contracts

Return to the project root and run:

```bash
truffle compile
truffle migrate --reset
```

This will deploy your `LandRegistry.sol` contract to the local Ganache blockchain.

#### 6️⃣ Configure Metamask

Add **Ganache** as a custom network:

```
Network Name: Ganache Local
RPC URL: http://127.0.0.1:7545
Chain ID: 1337
```

Import accounts from Ganache into Metamask using their private keys.
Make sure to import **two accounts** (for “User 1” and “User 2”) to test ownership transfer.

> ⚠️ Note: The first Ganache account (Account 0) is usually the **admin/deployer** account.

#### 7️⃣ Run the React Application

In the front-end directory:

```bash
npm start
```

Your app will open in the browser at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage / Project Flow

Here’s the typical usage flow:

### 👛 Step 1: Connect Wallet

* The app prompts to connect your **Metamask wallet**.
* Connect with **User 1** (first imported Ganache account).

### 🏠 Step 2: Register a New Land (User 1)

1. Go to the **Manage Land** page.
2. Fill property details (Plot No., Area, District, State, Price).
3. Click **“Register Land”** and approve the transaction.
4. Confirmation appears — *Land Registered Successfully!*

### 📜 Step 3: View Owned Lands

* Visit **Show My Lands** → Land ID appears with User 1’s address as owner.

### 💰 Step 4: List Land for Sale (User 1)

* On **Show My Lands**, click **“Put for Sale”** and confirm the transaction.

### 👥 Step 5: Switch to User 2

* In Metamask, switch to **User 2** (second Ganache account).
* The web page refreshes automatically.

### 🔍 Step 6: Explore and Request Land (User 2)

* Go to **Explore Lands**.
* Land ID 1 will appear as available for sale.
* Click **“Request Transfer”** and approve in Metamask.

### ✅ Step 7: Approve Transfer (User 1)

* Switch back to **User 1**.
* Visit **Approve Transfer** → You’ll see a pending request.
* Click **Approve** and confirm transaction.

### 🧾 Step 8: Verify Final Ownership

* As **User 1**, “Show My Lands” will now be empty.
* As **User 2**, “Show My Lands” shows **Land ID 1** with User 2 as new owner.

### 🛡️ Admin Panel (Optional)

* Login with **Admin account** (User 1).
* View:

  * **Show Lands** → All registered lands.
  * **Past Ownership Details** → Full ownership history by Land ID.

---

<details>
<summary>📂 Click to view Project Structure</summary>

```
landregistration/
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
```

</details>

