const openButton = document.querySelector("#openButton");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const openButton4 = document.querySelector("#openButton4");

const dialogBox = document.querySelector("#mydialog");
const dialogBoxText = document.querySelector("#mydialog div");
const myTitle = document.querySelector("#mydialog h2");
const myInfo = document.querySelector("#mydialog p");
const closeButton = document.querySelector("#closeButton");

openButton.addEventListener("click", () => {
    myTitle.innerHTML = "Np Membership";
    myInfo.innerHTML = "Bespoke package tailored to your strategic goals.";
    myInfo.innerHTML = "Unrivalled access to leadership forums and policy - shaping opportunities.";
    myInfo.innerHTML = "Premium brand exposure across all Chamber platforms and events.";
    myInfo.innerHTML = "Thought leadership opportunities to elevate your brand.";
    myInfo.innerHTML = "Dedicated support for your leadership and team development.";
    myInfo.innerHTML = "Be a voice for the region — help shape its future.";

    dialogBox.showModal();
});

openButton2.addEventListener("click", () => {
    myTitle.innerHTML = "Gold Membership";
    myInfo.innerHTML = "Enhanced exposure on Chamber platforms and website priority listing";
    myInfo.innerHTML = "VIP invitations to sector - specific and strategic events(e.g., MP Forums, Bank of England)";
    myInfo.innerHTML = "Membership certificate and promotional photo opportunities.";
    myInfo.innerHTML = "Access to the prestigious Black Country Business Club(T & C's apply).";
    myInfo.innerHTML = "6 - monthly in -person account reviews with your Business Relationship Manager";
    dialogBox.showModal();
});

 openButton3.addEventListener("click", () => {
     myTitle.innerHTML = "Silver Membership";
     myInfo.innerHTML = "Exclusive access to the Platinum Group – senior - level peer network.";
     myInfo.innerHTML = "Bespoke business review identifying growth opportunities in the region.";
     myInfo.innerHTML = "Invitations to high-impact policy and economic briefings (i.e. Bank of England, MP Forums)";
     myInfo.innerHTML = "Shape conversations around regional growth and business policy.";
     myInfo.innerHTML = "Share insights across sectors and gain fresh strategic perspectives.";
     myInfo.innerHTML = "Share best practice, knowledge, information and expertise to build strong and trusted business relationships.";
    dialogBox.showModal();
 });
 openButton4.addEventListener("click", () => {
     myTitle.innerHTML = "Bronze Membership"
     myInfo.innerHTML = "Bespoke package tailored to your strategic goals."
     myInfo.innerHTML = "Unrivalled access to leadership forums and policy-shaping opportunities."
     myInfo.innerHTML = "Premium brand exposure across all Chamber platforms and events."
     myInfo.innerHTML = "Thought leadership opportunities to elevate your brand."
     myInfo.innerHTML = "Dedicated support for your leadership and team development."
     myInfo.innerHTML = "Be a voice for the region — help shape its future."
     dialogBox.showModal();
 });


closeButton.addEventListener("click", () => {
    dialogBox.close();
});



