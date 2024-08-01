import React from 'react';
import './homeadd.css';
import homeImage from "../../../assets/homeadd.jpg";



const Homeadd = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
  <div className="gpt3__possibility-image">
    <img src={homeImage} alt="საუკეთესო შესაძლებლობები" />
  </div>
  <div className="gpt3__possibility-content">
    <h4>იყავით დარწმუნებული UyusTool-ის მაღაზიაში</h4>
    <h1 className="gradient__text">
      გამოცადეთ Uyustools-ის ხარისხი და სანდოობა დღესვე.
    </h1>
    <p>
      Uyustools-ში ჩვენ ვამაყობთ მომხმარებლებისთვის სანდო და გამძლე ხელსაწყოების მიწოდებით.
      ჩვენი ფართო პროდუქციის ხაზი მოიცავს ელექტრო ხელსაწყოებს, ელექტრო ხელსაწყოების აქსესუარებს, ხელის ხელსაწყოებს, 
      საყოფაცხოვრებო ხელსაწყოებს და სხვა. ხარისხის კონტროლის, შეფუთვის, შესანახი, ტრანსპორტირების, 
      მარკეტინგის მხარდაჭერისა და გაყიდვების შემდგომი მომსახურების სისტემით, ჩვენ დავამკვიდრეთ ჩვენი რეპუტაცია, 
      როგორც ჩინეთის საზღვარგარეთულ ხელსაწყოების ინდუსტრიის ერთ-ერთი წამყვანი კომპანია.
    </p>
    <h4>
      მოითხოვეთ ადრეული წვდომა დასაწყებად
    </h4>
  </div>
</div>

  )
}

export default Homeadd
