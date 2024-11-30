document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });

    const characters = document.querySelector('.characters'); 
    let isMouseDown = false; 
    let startX;
    let scrollLeft; 

    characters.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - characters.offsetLeft; 
        scrollLeft = characters.scrollLeft; 
        characters.style.cursor = 'grabbing'; 
    });

    characters.addEventListener('mouseleave', () => {
        isMouseDown = false; 
        characters.style.cursor = 'grab'; 
    });

    characters.addEventListener('mouseup', () => {
        isMouseDown = false; 
        characters.style.cursor = 'grab'; 
    });

    characters.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return; 
        e.preventDefault(); 
        const x = e.pageX - characters.offsetLeft; 
        const walk = (x - startX) * 3; 
        characters.scrollLeft = scrollLeft - walk; 
    });

    const charactersList = document.querySelectorAll('.character');

    const characterData = {
        character1: {
            image: 'https://i.pinimg.com/736x/fb/d8/09/fbd80977941b72606b4e0d04071c68c1.jpg', // новая картинка для Синдзи
            name: 'Так себе шутник'
        },
        character2: {
            image: 'https://i.pinimg.com/736x/24/22/34/2422341f6ce61f599c2d3f49fef71876.jpg', // новая картинка для Мисато
            name: 'Горячая чикса'
        },
        character3: {
            image: 'https://i.pinimg.com/736x/bb/92/5f/bb925ffd1a17082fe0bc90fb190df261.jpg', // новая картинка для рей
            name: 'Аянами Рей'
        },
        character4: {
            image: 'https://i.pinimg.com/736x/f2/c2/c4/f2c2c4ce31730043bbab2a50b7d340bf.jpg', // новая картинка для аски
            name: 'Пубертатная язва'
        },
        character5: {
            image: 'https://i.pinimg.com/736x/a1/2c/db/a12cdb51f0430f0ca8345d605b79e935.jpg', // новая картинка для рицуго
            name: 'Недопонятый гений'
        },
        character6: {
            image: 'https://i.pinimg.com/736x/57/5c/88/575c88c90c2977022faf1bd01e6f27c5.jpg', // новая картинка для гендо
            name: 'Злодей британец'
        },
        character7: {
            image: 'https://i.pinimg.com/736x/f2/e7/f5/f2e7f5e989d766a04dc1e0aefa1ab111.jpg', // новая картинка для кадзи
            name: 'Козел, с зарплатой до колен'
        },
        character8: {
            image: 'https://i.pinimg.com/736x/f3/38/fc/f338fc60a0af31bee753b5a82b7df23a.jpg', // новая картинка для нагиса
            name: 'Самый сексуальный мужик в мире'
        },
        character9: {
            image: 'https://i.pinimg.com/736x/4e/8d/1f/4e8d1f6bcb450da76eae25851723fd53.jpg', // новая картинка для пенпен
            name: 'Чилловый парень'
        },
        character10: {
            image: 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1005814/gV7SPnaWQjVSuDmMItpUHQ.jpg', // новая картинка для ангелы
            name: 'Говнюки'
        }
    };

    charactersList.forEach(character => {
        character.addEventListener('mousedown', () => {
            const table = document.getElementById('charactersTable');
            
            if (table) {
                table.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        const charId = character.id;
        const charImage = character.querySelector('.character-image');
        const charName = character.querySelector('.character-name');

        character.addEventListener('mouseenter', () => {
            if (characterData[charId]) {
                charImage.style.backgroundImage = `url(${characterData[charId].image})`;
                charName.textContent = characterData[charId].name;
            }
        });

        character.addEventListener('mouseleave', () => {
            switch(charId){
                case 'character1':
                    charImage.style.backgroundImage = 'url("https://storage.yandexcloud.net/otakuy-media/post_media/82627930-43ce-11ef-9684-ae54f4e7377a")';
                    charName.textContent = 'Синдзи Икари';
                    break;

                case 'character2':
                    charImage.style.backgroundImage = 'url("https://i.pinimg.com/736x/83/11/0c/83110c6604f80210bfce7171ca7b2024.jpg")';
                    charName.textContent = 'Мисато Кацураги';
                    break;

                case 'character3':
                    charImage.style.backgroundImage = 'url("https://lh6.googleusercontent.com/proxy/CUDjCBhm_N4pry-hcOfw7bdIKNW2jTpAOrRgnWl3WThrmHxmOl1lwCSxzXct77YN67qehTRSsYEhanIFbhbEN1t0U4w")';
                    charName.textContent = 'Рей Аянами';
                    break;
    
                case 'character4':
                    charImage.style.backgroundImage = 'url("https://cs9.pikabu.ru/post_img/big/2019/09/03/6/1567499274152957859.png")';
                    charName.textContent = 'Аска Лэнгли Сорью';
                    break;
                
                case 'character5':
                    charImage.style.backgroundImage = 'url("https://lh6.googleusercontent.com/proxy/oCIQK_XrmxBIx-MV7gvBsjglfWtezpTwcKCDEaLLBZi48cv6ZEpZSRmjsXy0Skr8aAUoZidARQdZRBwsBTfDLGM2c9w")';
                    charName.textContent = 'Рицуко Акаги';
                    break;
    
                case 'character6':
                    charImage.style.backgroundImage = 'url("https://cs5.pikabu.ru/images/big_size_comm/2015-10_4/1445254969160623708.jpg")';
                    charName.textContent = 'Гэндо Икари';
                    break;

                case 'character7':
                    charImage.style.backgroundImage = 'url("https://i.pinimg.com/736x/fc/fc/54/fcfc5417e3b862835fae3b8b833ac89b.jpg")';
                    charName.textContent = 'Рёдзи Кадзи';
                    break;
    
                case 'character8':
                    charImage.style.backgroundImage = 'url("https://sun9-72.userapi.com/impg/BZDgKow0x0jLp5ntJxk2qpSLSNf5s8gjhC2vHQ/VhBU-YUpSkE.jpg?size=985x644&quality=96&sign=3adcabd281fdc630f0d8396d905aa236&type=album")';
                    charName.textContent = 'Каору Нагиса';
                    break;
    
                case 'character9':
                    charImage.style.backgroundImage = 'url("https://i.pinimg.com/736x/d3/cd/7f/d3cd7f957be8ed69264adf2258e63418.jpg")';
                    charName.textContent = 'Пен-Пен';
                    break;
        
                case 'character10':
                    charImage.style.backgroundImage = 'url("https://evanotend.com/wp-content/uploads/2021/08/b428bc797c95a4ebaab3726508da8f37.jpg")';
                    charName.textContent = 'Ангелы';
                    break;
            }
        });
    });

    document.querySelectorAll('.character').forEach(character => {
        character.addEventListener('click', () => {
            // Найти соответствующую строку таблицы
            const targetId = character.id;
            const targetRow = document.getElementById(targetId);

            // Если строка найдена, подсветить и прокрутить к ней
            if (targetRow) {
                document.querySelectorAll('.charactersTable tr').forEach(row => row.classList.remove('highlight'));
                targetRow.classList.add('highlight');
                targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    const draggable = document.getElementById('draggable');
    const dropzone = document.getElementById('dropzone');
    const resetButton = document.getElementById('resetButton');

    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', draggable.id);
    });

    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        if (data === 'draggable') {
            dropzone.innerHTML = '<img src="https://i.ytimg.com/vi/G-oT-E2w75M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGUGCmy5OWePF4GyHR1xz-4tj7nA" alt="Синдзи в Еве">';
            draggable.style.display = 'none';
            dropzone.style.width = '83vw';
            alert("Поздравляем! Вы сломали психику Синдзи");
            resetButton.style.display = 'inline';
        }
    });

    resetButton.addEventListener('click', () => {
        dropzone.innerHTML = '<img src="https://i.pinimg.com/474x/c6/ed/0d/c6ed0dab0e48f5c849c718c6f3d16434.jpg" alt="Ева 01">';
        draggable.innerHTML = '<img src="https://i.pinimg.com/736x/31/bc/16/31bc169eca66ddfb8d9fa166b103de20.jpg" alt="Вы сломали Синдзи">';
        dropzone.style.width = '41vw';
        draggable.style.display = 'flex';
        resetButton.style.display = 'none';
    });




    const greetButton = document.getElementById('greetButton');
    const nameInput = document.getElementById('nameInput');
    const header = document.getElementById('header');
    const author = document.getElementById("genius");
    const comeToEva = document.getElementById('comeToEva');
    const hi = document.getElementById('niceToMeetU');
    const menuLinks = document.querySelectorAll('#menu a');
    const lines = document.querySelectorAll('#hamburger div');
    const findImposter  = document.getElementById('findImposter');
    const charactersTable = document.getElementById('charactersTable');
    const table = document.querySelector('.charactersTable table');
    const howDidKaoruDie = document.getElementById('howDidKaoruDie');
    const realContent = document.getElementById('realContent');
    const baddie = document.getElementById('baddie');
    const footer = document.getElementById('footer');

    greetButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name.toLowerCase() === 'аянами рей' || name.toLowerCase() === 'рей аянами' || name.toLowerCase() === 'рей' || name.toLowerCase() === 'аянами') {
            const firstPrompt = prompt("Ты тоже Аянами Рей?")
            if(firstPrompt.toLowerCase() === 'да, я та, кого знают как аянами рей' || firstPrompt.toLowerCase() === 'да я та кого знают как аянами рей' || firstPrompt.toLowerCase() === 'да я та, кого знают как аянами рей' || firstPrompt.toLowerCase() === 'да, я та кого знают как аянами рей') {
                alert("Мы все те, кого знают, как Аянами Рей");
                document.body.style.background = 'url("https://i.pinimg.com/736x/68/b5/ce/68b5cecc823ee8386fad0f4c2d1e66ce.jpg")';
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundAttachment = "fixed";
                characters.style.background = 'rgba(0, 0, 0, 0.6)';
                header.style.background = 'rgba(0, 0, 0, 0.8)';
                author.style.background = 'rgba(0, 0, 0, 0.6)';
                comeToEva.style.background = 'rgba(0, 0, 0, 0.6)';
                hi.style.background = 'rgba(0, 0, 0, 0.6)';
                header.style.color = 'white';
                author.style.color = 'white';
                comeToEva.style.color = 'white';
                hi.style.color = 'white';
                menu.style.color = 'white';
                menu.style.background = 'rgba(0,0,0,.8)';
                howDidKaoruDie.style.color = 'white';
                howDidKaoruDie.style.background = 'rgba(0, 0, 0, 0.6)';
                realContent.style.color = 'white';
                realContent.style.background = 'rgba(0, 0, 0, 0.6)';
                menuLinks.forEach(link => { link.style.color = 'white'});
                lines.forEach(line => {line.style.background = 'white'});
                findImposter.style.background = 'rgba(0, 0, 0, 0.6)';
                findImposter.style.color = 'white';
                charactersTable.style.color = 'white';
                charactersTable.style.background = 'rgba(0, 0, 0, 0.6)';
                baddie.style.color = 'white';
                baddie.style.background = 'rgba(0, 0, 0, 0.6)';
                table.style.backgroundColor = '#333';
                const headers = table.querySelectorAll('th');
                headers.forEach(header => {
                    header.style.backgroundColor = '#555';
                    header.style.color = '#fff';
                });
                const rows = table.querySelectorAll('tr:nth-child(even)');
                rows.forEach(row => {
                    row.style.backgroundColor = '#444';
                    row.style.color = '#ddd';
                });
                const allRows = table.querySelectorAll('tr');
                allRows.forEach(row => {
                    row.addEventListener('mouseover', () => {
                        row.style.backgroundColor = '#555';
                    });
                    row.addEventListener('mouseout', () => {
                        row.style.backgroundColor = row.rowIndex % 2 === 0 ? '#444' : '#333';
                    });
                });
                footer.style.background = 'rgba(0, 0, 0, 0.8)';
                footer.style.color = 'white';
            }
            } else if (name) {
                alert(name + ', Вас уволили, но зато вы выжили');
            } else {
                alert("Без имени вас не принялии на работу и спустя минуту вы стали жертвой атаки ангелов")
            }
    });

    const actionSelector = document.getElementById('actionSelector');
    const linksBlock = document.getElementById('links');

    actionSelector.addEventListener('change', function() {
        const selectedValue = actionSelector.value;

        if (selectedValue === 'showLinks') {
            linksBlock.style.display = 'block';
        } else if (selectedValue === 'redirect') {
            window.location.href = 'https://131.by/clinics/dispansery/gorodskoy-klinicheskiy-psikhiatricheskiy-dispanser/';
        } else {
            linksBlock.style.display = 'none';
        }
    });

    const form = document.getElementById('choiceForm');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function() {
        const selectedAction = form.action.value;

        if (selectedAction === 'showLinks') {
            linksBlock.style.display = 'block';
        } else if (selectedAction === 'redirect') {
            window.location.href = 'https://131.by/clinics/dispansery/gorodskoy-klinicheskiy-psikhiatricheskiy-dispanser/';
        } else {
            linksBlock.style.display = 'none';
            alert('А отвечать кто будет');
        }
    });

    document.getElementById("submit-button").addEventListener("click", function () {
        const checkboxes = document.querySelectorAll('input[name="option"]');
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);        
        if (allChecked) {
            alert("Верно!");
            const image = document.getElementById("main-image");
            image.src = "https://otvet.imgsmail.ru/download/201393869_9421cf3058a8d1cd8fe81d8998d18e0c_800.gif";
        } else {
            alert("Плохо его знаешь.");
        }
    });

    const canvas = document.getElementById('responsiveCanvas');
    const ctx = canvas.getContext('2d');

    const baseWidth = 512;
    const baseHeight = 512;
    
    function resizeCanvas() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 480) {
            canvas.width = baseWidth / 4;
            canvas.height = baseHeight / 4;
        } else if (screenWidth < 768) {
            canvas.width = baseWidth / 2;
            canvas.height = baseHeight / 2;
        } else {
            canvas.width = baseWidth;
            canvas.height = baseHeight;
        }
        
        drawContent();
    }

    function drawContent() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scaleX = canvas.width / baseWidth;
        const scaleY = canvas.height / baseHeight;
        ctx.save(); 
        ctx.scale(scaleX, scaleY);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, baseWidth, baseHeight);
    
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(252, 454);
        ctx.lineTo(29, 54);
        ctx.lineTo(472, 54);
        ctx.lineTo(252, 454);
        ctx.lineTo(29, 54);
        ctx.lineTo(252, 54);
        ctx.lineTo(252, 454);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(11, 302.5);
        ctx.quadraticCurveTo(103, 240, 195.5, 302.5);
        ctx.quadraticCurveTo(103, 350, 11, 298); 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();    
        ctx.beginPath();
        ctx.arc(104, 298, 27, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(11, 210.5);
        ctx.quadraticCurveTo(103, 150, 195.5, 210.5);
        ctx.quadraticCurveTo(103, 260, 11, 206.5); 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();    
        ctx.beginPath();
        ctx.arc(104, 207, 27, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(11, 116.5);
        ctx.quadraticCurveTo(103, 60, 195.5, 116.5);
        ctx.quadraticCurveTo(103, 170, 11, 112.5); 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();    
        ctx.beginPath();
        ctx.arc(104, 115, 27, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(311, 116.5);
        ctx.quadraticCurveTo(403, 60, 495.5, 116.5);
        ctx.quadraticCurveTo(403, 170, 311, 112.5); 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();    
        ctx.beginPath();
        ctx.arc(404, 115, 27, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(311, 210.5);
        ctx.quadraticCurveTo(403, 150, 495.5, 210.5);
        ctx.quadraticCurveTo(403, 260, 311, 206.5); 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();    
        ctx.beginPath();
        ctx.arc(404, 207, 27, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(311, 302.5);
        ctx.quadraticCurveTo(403, 240, 495.5, 302.5);
        ctx.quadraticCurveTo(403, 350, 311, 298); 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();    
        ctx.beginPath();
        ctx.arc(404, 298, 27, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(311, 395.5);
        ctx.quadraticCurveTo(403, 330, 495.5, 395.5);
        ctx.quadraticCurveTo(403, 440, 311, 391.5); 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();    
        ctx.beginPath();
        ctx.arc(404, 389, 27, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.restore();
    }
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
});