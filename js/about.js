const curriculumItems = [
    "အခြေခံသင်ကြားမှု သင်ကြားခြင်း",
    "Steams 1/2. Stams 1 ဘာသာရပ်နှစ်ခုစီ သင်ကြားခြင်း",
    "ဘာသာရပ်ဆိုင်ရာသင်ကြားမှု Guide များသင်ကြားခြင်း",
    "စဉ်ဆက်မပြတ်အောင်သင်ကြားပေးသောကြောင့် စာမေးပွဲအောင်မြင် မြင့်မားခြင်း",
    "စီစဉ်မှု ဆောင်ရွက်မှု ရှင်းလင်းမှု",
    "လေ့လာသင်ယူမှု ပုံစံ ဖော်ပြခြင်း"
  ];
  
  const list = document.getElementById("curriculum-list");
  
  curriculumItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    list.appendChild(li);
  });
  