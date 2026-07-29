const openButton = document.querySelector("#openButton");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const openButton4 = document.querySelector("#openButton4");

const dialogBox = document.querySelector("#mydialog");
const dialogBoxText = document.querySelector("#mydialog div");
const myTitle = document.querySelector("#mydialog h2");
const myInfo = document.querySelector("#mydialog p");
const myInfo2 = document.querySelector("#mydialog p");
const closeButton = document.querySelector("#closeButton");

openButton.addEventListener("click", () => {
    myTitle.innerHTML = "Np Membership";
    myInfo.innerHTML = `<p>✔️Bespoke package tailored to your strategic goals.</p>
     <p>✔️Unrivalled access to leadership forums and policy - shaping opportunities</p>
    <p>✔️Premium brand exposure across all Chamber platforms and events.</p>
    <p>✔️Thought leadership opportunities to elevate your brand.</p>
    <p>✔️Dedicated support for your leadership and team development</p>
    <p>✔️Be a voice for the region — help shape its future.</p>`

    dialogBox.showModal();
});

openButton2.addEventListener("click", () => {
    myTitle.innerHTML = "Gold Membership";
    myInfo.innerHTML = `<p>✔️Enhanced exposure on Chamber platforms and website priority listing</p>
    <p>✔️VIP invitations to sector - specific and strategic events(e.g., MP Forums, Bank of England)</p>
    <p>✔️Membership certificate and promotional photo opportunities.</p>
    <p>✔️Access to the prestigious Black Country Business Club(T & C's apply).</p>
    <p>✔️ "6 - monthly in -person account reviews with your Business Relationship Manager</p>`
    dialogBox.showModal();
});

 openButton3.addEventListener("click", () => {
     myTitle.innerHTML = "Silver Membership";
     myInfo.innerHTML = `<p>✔️Exclusive access to the Platinum Group – senior - level peer network.</p>
     <p>✔️Bespoke business review identifying growth opportunities in the region.</p>
     <p>✔️Invitations to high-impact policy and economic briefings (i.e. Bank of England, MP Forums)</p>
     <p>✔️Shape conversations around regional growth and business policy.</p>
     <p>✔️Share insights across sectors and gain fresh strategic perspectives.</p>
     <p>✔️Share best practice, knowledge, information and expertise to build strong and trusted business relationships.</p>`
    dialogBox.showModal();
 });
 openButton4.addEventListener("click", () => {
     myTitle.innerHTML = "Bronze Membership"
     myInfo.innerHTML = `<p>✔️Bespoke package tailored to your strategic goals.</p>
     <p>✔️Unrivalled access to leadership forums and policy-shaping opportunities.</p>
     <p>✔️Premium brand exposure across all Chamber platforms and events.</p>
     <p>✔️Thought leadership opportunities to elevate your brand.</p>
     <p>✔️Dedicated support for your leadership and team development.</p>
     <p>✔️Be a voice for the region — help shape its future.</p>`
     dialogBox.showModal();
 });


closeButton.addEventListener("click", () => {
    dialogBox.close();
});



