





// Students Profile
document.addEventListener('DOMContentLoaded', function() {
    fetch('students.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('profiles-container');

            data.forEach(gradeData => {
                const gradeSection = document.createElement('section');
                gradeSection.className = 'grade-section';
                
                const gradeHeading = document.createElement('h2');
                gradeHeading.textContent = `${gradeData.grade} শ্রেণি ছাত্রছাত্রী`;
                gradeSection.appendChild(gradeHeading);
                
                const profilesGrid = document.createElement('div');
                profilesGrid.className = 'profiles-grid';
                
                gradeData.students.forEach(student => {
                    const profileCard = document.createElement('div');
                    profileCard.className = 'profile-card';
                    
                    const img = document.createElement('img');
                    img.src = student.photo;
                    img.alt = student.name;
                    profileCard.appendChild(img);
                    
                    const name = document.createElement('h3');
                    name.textContent = student.name;
                    profileCard.appendChild(name);

                    const father = document.createElement('p');
                    father.textContent = `বাবার নাম: ${student.father}`;
                    profileCard.appendChild(father);

                    const mother = document.createElement('p');
                    mother.textContent = `মায়ের নাম: ${student.mother}`;
                    profileCard.appendChild(mother);

                    const dob = document.createElement('p');
                    dob.textContent = `জন্মতারিখ: ${student.dob}`;
                    profileCard.appendChild(dob);
                    
                    const age = document.createElement('p');
                    age.textContent = `বয়স: ${student.age} বছর`;
                    profileCard.appendChild(age);
                    
                    const features = document.createElement('p');
                    features.textContent = `বৈশিষ্ট্য: ${student.features}`;
                    profileCard.appendChild(features);
                    
                    const achievements = document.createElement('p');
                    achievements.textContent = `অভিনব অর্জন: ${student.achievements}`;
                    profileCard.appendChild(achievements);
                    
                    const favorite = document.createElement('p');
                    favorite.textContent = `পছন্দের বিষয়: ${student.favorite}`;
                    profileCard.appendChild(favorite);

                    const contact = document.createElement('p');
                    contact.textContent = `যোগাযোগের তথ্য: ${student.contact}`;
                    profileCard.appendChild(contact);
                    
                    profilesGrid.appendChild(profileCard);
                });
                
                gradeSection.appendChild(profilesGrid);
                container.appendChild(gradeSection);
            });
        })
        .catch(error => console.error('Error loading student data:', error));
});
