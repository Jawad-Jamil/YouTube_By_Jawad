window.addEventListener('load', ()=>{
    document.querySelector('.preloader_wrapper').setAttribute("style","display:none;");
})


let video_details = [

    [
    "শামীম ওসমানের বাবা-মা'র কবরের ওপরে শ্মশানের মাটি! Shamim Osman",
    "somoy tv",
    "83K",
    "1 hour",
    // Not Requared "https://drive.google.com/file/d/1Z4LIiQsux5uu1Dhi3Q3ClbjXilSqOFzL/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629375214468-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T121425Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=5f3741c6b02ddeb56952baf587dcd516ca706bf516e2d563addf6a43e48b7e85d8a819b0c147f71d454181cda62bf28aa89b1770023f4a44652af92cdf54ea277e747741d841cd6a59770b8e1159e18c469d5ee8d76c53ac1852c66dd68ee4e08b2bfa964370c2b6e963624ab1418329d8e2d30011b26b1e486694bbd47d7db15cafc00fed6244011ffd8792da96dbdae61188bd9b3f5a5af1114e445ae409b227836c19c7137b162ac128630ee450b536f7aae28fdb3d2d0342e8734cc085ae6ce05fcc5155db143ed357ca3a8fcbe2b88756358b99584a6fe963bc84febfbadf4c2c8d65e1906c94fca7b2e5211b30ba22c0ddd6a4dca0ba5e82785933a088"
    ],


    [
    "শিক্ষণীয় হাসির শর্টফিল্ম কুদে কালা কুদে কালা -০৩ Thikana TV",
    "Thikana Tv.press",
    "131K",
    "3 days",
    // Not Requared "https://drive.google.com/file/d/1OdX05VtfRFyAr-1pDyqgiSUIyMkVOns0/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629375885355-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T122614Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=52929e289026ec5638bd7da98487a602e2ff9ca809a705c1927008a367b541ceaa352d41ac86bc15959ad97f189643c121d697ce49523e30635d972b228cbce05288ebec518e3ceb7cb1d1c485645c002beee322bd6ace03d86a4fda40927c43813f39fc332c65538a538420e6d9e1f35891572778a42789d75a5913cdfc4d18e25447209aed5005a45b70313989dc1b4f682e8a3f422aca768e1e6c9ae3074ede2eb32db5a1a3fadd2bb1ed8145ab63eeb3e11263bea0ff97181d7c957181a32d6993bbccd27e76702612f7a6898a523d96a78e02dd208884757ef428de845b96e594615c4ffe47ff9f2ff3feb725295b8ae47a598fdde80fb03f6cc91c2083"
],


    [
    "Abu Taha Muhammad Adnan Waz Status Video",
    "Abu Taw Haa Muhammad",
    "1.8 lakh",
    "5 months",
    // Not Requared "https://drive.google.com/file/d/1pWeQ--wEYUHdOvwhsnlrCW0RWj_hADDS/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376041112-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T122754Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=4e13c43cc40f54d0b279020ca6aa8ba18df568b2f522730ab91531355c491e3be24ee016a080c3ba8abdf42a5e60f028190281bc74cde090e65a2ea40ebddfd886995dbc1e5736dbe12b6f372f6bda9bfec1b51801a9f716fc8b7ea5a792394f17f47bbd3f1155319eeb85020cb3b54d8936ddf78d3d5105ef939a5c209fd4f6078f7fee51cb4abb42300173b2f10d9c5fecf65da0b181b8d58f1c0c12c94b7c527901927cb04ed67f2c9e8f55915c1d924b32e48b4dbca61728557eba4ec6f2567108e66c78d1b700a989952f04b36c17062924b69bfe2f1fbade411976794a35420e527fbc21ad5ec9e74ab3d0db318f6c67aab216c84f64104107e0937b4e"
],


    [
    "মাহে রমজানের গান রহমের বৃষ্টি জাইমা নূর",
    "Jaima Noor",
    "3.4M",
    "1 years",
    // Not Requared "https://drive.google.com/file/d/1Z2XerGXVELE_IPD-9rRhZwXlCkkYGno3/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376244929-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T123114Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=6aa7b687e0b4b89e7f3f3a07e737346b80445c23858a6a8a9fcc89faea3a4ef6f4d2217b256bcfda96cc98e1e3aec99416000c1c3e1a6a5d6c7276ded3d096100ead315c60b65b1e0e5edc3cd5bf04c2558c92a9ccc7e4e6879362d5e41a05932ee29e9e17acf256e42c72bda14e7b1ce45c74a658d070392575a7db5544c7ac48c9c8c0446334e1716dceb49c57cb30c1ac0babab89bd01b536931cf33f02f335f122dceb663fa160a1294969456af3f24ec94620c93ede5003de8acf59f42876acc7c1925e80ce9753d09d29266b3aa761a1bb56540f181281458b17c2b20eaf9962c74bdde3294464e7e06582adb6980b74e35e28073f7d0b4d2ad897e6ea"
],


    [
    "Pobitro Prem পবিত্র প্রেম Akib Ahmed Islamic Natok 2021",
    "akib islamic tv",
    "229K",
    "2 years",
    // Not Requared "https://drive.google.com/file/d/1bbdwLGSKpIHe_CL-HODbQy-MvgNpffHw/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376445365-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T123444Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=a1b8ae085e7f639ff495ea9d096032a06df16014b619756cbd230847714a2b4e4b48f444f4584e52a46efd23a2e829b9b6ec2c51025b8787c9c4a34857e2617e7e9854a175e650bb313cab69d7c28054f070aabd00028f85bfe9ea4c604a283487d70a4c55f0952340c252a921c63ad3c2d8b300f1521b3f82aa355bfe9840806f147e3143f5305d438297cdb243b6a526ff2c77efeb8c024ab3a8f4b6426418fb0d605c9db65f84697f1143d3366a28be28801fb186104230b5cf65dfac623f38177a86e2fa25be486d7581f5011630c53c46d429926367f0d3f5b9ff253f5dd966b23460b9bad63fdebe97f8aa81703e8e480d6a1c0fa12e56c7e393a2b0bb"
],


    [
    "জাইমার কন্ঠে বিবেক জাগ্রত করার গান কেমন মানুষ তুমি Jaima Noor",
    "Jaima Noor",
    "668K",
    "4 hours",
    // Not Requared "https://drive.google.com/file/d/1VL0NPlDgRjADZs0zWrLotFouNE9z5vpn/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376535504-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T123556Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=45ba2b5b84e5971f35554dd2951e77dbad78fe58cd1e7f1ea334f86778231bf1b4fcb1a2305bad5762aa86726e988ea67264c93d767e2536a8abb2e56c02565fc1fa694c130599a165a294279a580181e9eef025b895941078c25575bd44814a3b199934f442913d3a789c1baf8bc298456080386741ca778c58c10eb63528b463ce2367b7b855a10eea30301475c5f41597dd7531077dec9d463d7531c67ff100f0d115a0d79c1c78a9ece8aecc88d53e080644e9ced165a88c52e2d27fbf163be02ead3fe0362a66bd83d060b6ded70db59fc069b010c777d4f60a6bcf4faae208f3add948d2dee497c4bbba04bb154327f5890cbaad59ed133472ab402e23"
],


    [
    "ব্রাজিল vs আর্জেন্টিনা Bangla Islamic Natok 2021 II Akib Islamic Tv",
    "akib islamic tv",
    "39K",
    "4 months",
    // Not Requared "https://drive.google.com/file/d/1D_2402oD4lDQ8-B8SG8M_OgJ_bHYZPsS/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376590858-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T123654Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=188149d4e5c30d31ef733ec25a4ecfeab134d98b1a23d892ecd3911886681abeb8291b8e425ee80c8883efa1f4928fdc1fc1bca53a7ad62807e28f01b9330cf01cd3d882e250dd732ebe64f4346bb4611521ed78c51d57089f570733b091802477fb28cb6748fbdadfcd09fc9b7ce0b89b76690e95e52aaf71c3b4a4340d2b431ed63849731752b9347f22737582ce197da1961aa1c55cf26555a6d1fbfee03f59ce82a30275d4b9de5a317d7a0bd0e3a58b46ac31df42e4b6d69f0797dd043c0d1f9253e4529d19f7b6ca36ad2af440a1967e86fe785ae37e7c7c68cccb92aa11d5ccc15f8c13944f85c61bd3c5b6086362c8fb8d2a95edf99c9c978d6e2967"
],


    [
    "Seafood Halal or Haram Mizanur Rahman Azhari",
    "mizanur rahman azhari",
    "4M",
    "2 years",
    // Not Requared "https://drive.google.com/file/d/1YrIJfPperAtum5N3em5XnWPDcLSvaxke/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376645683-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T123738Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=a8a9f3ee26b0c8d3142a9026c98acf3ae5ca3fd2b3d0ad79c3b3092f12bc668e3668134bfe43d7bc08668a7bcb5645ac48f9b7c6ab64273c34de07e23dc49dc9518ec77332c5871c443b00a392b2fae0a20aaf94c84c92624d8b0dd1dd8d4b9d126965a0296a7573a41e876ef5a44939dd9dd8d2cb71727c8ef91279d22c4964e4311e2d86334c951d45b333b1b5b8aad2bb8483903789f6556dfc86b3b7ae6fcce3fd2fef3a6d50093a96e90294384f98fa13d8d2721f7405016890d0e4f262d6613059dddd8aa0422e987eb9c0cbfd4b81b1447421dd25b1818d782358f93c3c17592a6285234f787d25515a87afc31a5ea682496956e089200ddaae79e9cd"
],


    [
    "শহীদ কারা  Who are the martyrs in Islam মিজানুর রহমান আজহারি",
    "mizanur rahman azhari",
    "844K",
    "2 weeks",
    // Not Requared "https://drive.google.com/file/d/1Ck8Sn5zabbYj0GdmWZU4JmFxEGtNE8fl/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376700704-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T123958Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=072b58be06036f031757ee6620598e2d17593737df2a912d9bf221e5a81d0e13acd520ca70d1479eefd076ad88f21cfd9b4cb8209b6fa33a00ade7376c8b544101fe2bedc1993613fd72f0d5185383923ab6fba164896bc39f0ed64b07122c2aef193e7d59ed1cd62520dcb26b8fbb1193b2551c287627ce1c98ea1064060d2825ee52a0597dba658f02fb3bcf6a6989a25a1015a03e83632469857c9daeb892ed3919c4a97d35a940e08d17a4bd1ca9c25f16783957374de5f2eae695f9ddafee3050d365dc069cf43c692ef83d8995c583e95d28e5de418235d2a5fefa8b28eea940829566cc5f48a2972744a52735a264cb797784dbcc5f4efaacf4696c92"
],


    [
    "KRIPONNATA-2 কৃপণতা Bangla Islamic Natok 2021 Akib Ahmed",
    "akib islamic tv",
    "79.6K",
    "4 months",
    // Not Requared "https://drive.google.com/file/d/1o2odlDyDBm10-ZZbF6QNc5LguaFjFxSD/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376835474-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T124141Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=98c72957030cebc6b54ceec88f5f87e750bf24a0e57a878246c8fddba1feb330a3e2890c6e1d703b468146d13994bec7234e10276b1b8d582d0450c83b84444fffc09fb9fe7498a7079eefc50ac4580f318274c0682affb68a69068f7d5a244f61de2243766ac5340972546684a76349fdd12e9f36f5b86349ef7ed089481f389a0357ffde1d1c86294047f3ef667715279d46eb0c732d94a534c7a7e278b5da6f3843840e05000250a8c9e240d81e3cb21b5652caac37fddd3a27469a13a1ffb833356c2c887c56a88ede24bc4190ae6a7d52ce809302d045a84fddcee3443b5b7b024704e07b14618a8d567faecb4a40fbba97963cf85ba6ce4dcdea97a7d0"
],


    [
    "সাইদি সাহেবের ১৯৮০ সালের আগুন ঝরা বক্তব্য। Delwar Hossain Saidi",
    "Madina tv",
    "89.6K",
    "3 months",
    // Not Requared "https://drive.google.com/file/d/1d8YWDOFrXyoUw6estGdvgztopb2AE0qt/preview"
    "https://storage.googleapis.com/sx-master/8983a277bacc6b%2Ffiles%2F1629376943995-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T124240Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=8f3bce8927e7e416fbd49ea35779531e6c9d7cdddd6dd53336c83a5cd01b710ac920b39d91092f4b0ac18b03afaf5d387e822e6bdb76f560d32438d0d111885bef3977d0c872b0fa9259c549a9a914d5e105fc99f3164fdff48dcd2a01364fd9f32005ba0052e5582c994cfdc2dc7afb7b29f6013168dd558232fcf1f5be60a618870a809c86450227bfdf7ac9e30479a4d006626b54f975355d36985cbd9eeac59989168f9085a8ff8f4462ebb45cf728150955813c686f9e7726e6dde9f5b76c8013091810df646e38bfe63dd299557327f78bd3e28d275a2fe4d17735791462b89677c6a5bf7a01afa22ea22bfc1dcdca16eac974d7bd348d02b762ee3d7d"
],


    [
    "শ্রেষ্ঠ বক্তার শ্রেষ্ঠ বক্তব্য শুনুন জীবন বদলে যাবে Dr.shafiqul Islam masud",
    "Dr. Shafiqul Islam",
    "2.6M",
    "8 months",
    // Not Requared "https://drive.google.com/file/d/18OrsRLLGUiP3FP8-H7LTrplcm3arpLnk/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629381882292-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T140525Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=abb53f6e67e4851aaf8eae141d583ee7ffa1c6e4d9ec9d25080b28033d3c60fba0331e17cc6abf7749dd74677f7fef272df190f4ce8d28e0ad5e80ad8ca6e4ff724ad6e41a39eba1a692798f8d90546a3e6c6bfd8bdcbbf079f508d5df11ce5306cfc6491cd1ad849003f9159bd24903372da915f373b47a3249a373e3f6149fe55127aa4f4b4558c1adae626a0f1effcdc1edc917327cf0cefa279a1778a4fe347b407de79415c79428d2c07477909f920aa2551b25db7117b054a8279ec13a64a6937d7404c4eba9053b04e3a52da79c38ab9c8ee07fb773d585828480e2f611b52ae9139e41fc82a05b3c5f75b14b5a07a9da5f1a07ca7f301df2e7e7c664"
],


    [
    "জাইমা নূরের কণ্ঠে নতুন গান Machranga Dekhecho ki মাছরাঙ্গ Muchki Hasir",
    "saimum shilpogosthi",
    "359K",
    "6 months",
    // Not Requared "https://drive.google.com/file/d/1FzC5_FmEGY_TfwdzxKKM2LLX_DDSvCB_/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629377159572-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T124654Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=6836c1459df895a2a200581d95eb162ffd497a7ea8bf01994eeb3136c8793d9487e1ce6d149e416051f727f9a67ce4ee2aede7e66a98d05dcd12cfa0b7fbe64da34019e3c76de57d15aaf123d4909381ab751b156731bbdb515748c18eab329c8a65709c0ca5919f362ef5e105ee703d30929bbb562063ccc0d78e7fac17016145cea3c985a4edf386629fc262180725cab26169072a8d5b15d84d524e12d68c874c8ae84d021fae7f69f9696e0470e9a3dc01d0d70015d4a76037403f08a51af76b92c2c36d0ceb1900327df715fd6da84b2b89a969fee77f9826f07d0030495bf41698f6a9910d5d6afcdd529b9bd22e711012fd8c3e06b8cb4367977f1eb6"
],


    [
    "গেম আসক্তি PUBG FREE FIRE Islamic Natok Akib Ahmed",
    "akib islamic tv",
    "173K",
    "22 hours",
    // Not Requared "https://drive.google.com/file/d/1cFMHkox0ZRKF10xVmoDiASuIJQ1yOjtI/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629378789186-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T131404Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=afc02a0f62ea3935f58ce0dadeaf2da546617993216af51a24d27d2fb47d2123f1ac932a1ce7e92beda3c746ae2659239954e26a6dd788968b59289bfb77c62401fe96c6b54b3d692cb34e478f2328ac7a818da32282fbb21cf535fd6d12c026aaeb48369a027ccab1beffaefeeb86df1649cd0be6476be4457f5f99632e16f9f3ae04dee223bdda0ed87f6034c268ecfb031ccd9368640869e17d309e541a46741e7efd180b23b5deb4982913c6a7ad1b5f4743cf3f7d1e9a9221111afd2f54fdbe9530c8cd6077b7943602143254128a1e724fc77189f634300c08702e48bd14e6bd712bea8ce1427ead81a71a938571f66fd1ac00dabbf62d968ff6c583b3"
],


    [
    "২০ থেকে ২৫ হাজারে সেরা ৫ টি স্মার্টফোন - Best Phones in 20k-25k",
    "Sohag360",
    "582K",
    "9 months",
    // Not Requared "https://drive.google.com/file/d/1ef9xNHsNPzrb3lhoBc5QG1fJrw4o9zQi/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629378914336-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T131605Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=339edd0f8152382803d92b4c1b024e8ea3d82cc55392501c23b244a080cbfa13236cff52536626d3329aba1b796cbf219e3772a952e9870e456eac14c5e7f6d74796c125594e2d754791ddc657d42acbc42a99d5776b23b6fa51ff3578e32e40431a419a4b00487edc06c827dcbafff71a6d05a830cb34714f6eef19a2e49f331471a31652d2f797b83c7037386b52bc993a011f2f33e321bf93302d431a437f8e40704bf9367a00e7f2ae1ecb77b0b0f5256cdfa09194c308a9fcc47359a93e8a65144a6c9c58203d96bcadb025b56aae9e97a9b07ab0c6123c1d10a6ccf9e42603ae6927737a7e485c06fc523fd2a2daaeb6efe68f5d22479676e1211616be"
],


    [
    "শিশুদের কুরবানী ঈদের নতুন নাশীদ ইসমাঈলের কুরবানী Ismailer Kurbani Jaima",
    "Panvision tv",
    "3.7M",
    "7 days",
    // Not Requared "https://drive.google.com/file/d/1Z4LIiQsux5uu1Dhi3Q3ClbjXilSqOFzL/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629378995828-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T131724Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=289faaa5760404714104bef8d7fef6c9f9e2289a4ba7a82bbd8485103ff9d434dda52b4b750db4ac8189bde88ba45e458206b5103796f82c778b23f2e016550e2674335778fc40cf31bb93c01e4be2fb988edf55511bbd303021e0d9679a375d1a8316756fe63f2be4277447f7b50426611d7c676f27a294b7a41d1cedfbe8d4f89eb612ad7b1bd8708369bef55d9dd10461afbdc2be3e0e172a4dff95ae4d5247d7f743eeffe27bc865e4295656e8a9677923e409cb98f82ceed95fec2fef56f70702baff009c17bc6cd3583b9b79fee73cc64cb8f23ff713469ebce4ffbf0dd2b3045700862cd178dda5f5848c0b6ce58d405dd8fdf946014c41fa47554d8a"
],
    

    [
    "মতিউর রহমান মল্লিকের জনপ্রিয় নাশীদ আশাহত হয়ো নাকো তুমি | Jaima Noor",
    "Panvision tv",
    "37K",
    "12 days",
    // Not Requared "https://drive.google.com/file/d/1qdOdoHM2l133TlrIGbdxr0BuseQ8pzhn/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629379303318-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T132226Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=398d921621c738d47cb835cf7b431661d3cca348341a28246465839ed4e06292c3697f91263bf7c23d2693413e658ef30738499893bfe4197aa07c65334b8ba450733033f6ee94a8103c4ea1eb656a9cb34127584180d8ab9004a8a83267cd87ed5d15474ec67706c4d652368b70ddb10cdb52a2958b65ca7b75734b4c04323b4bd7754847c573b3998d903e9a66eb7a50ff9c6e6f5c29d27712e593c5e1c4806b559b70a917ff4c32e0739387ebd352a674b789b89df03a1c2e4d8a206bf57ab075f71cc9b2dad59b9eeca17dc5c4ca846b91ae1c66a3802ad2d27d849488c33a63afa45f614f5118b1e3a0b58137c642ff619f498767c63b17d4042e3c8f45"
    ],
    
        
    [
    "বাইয়াত নিয়ে জাগরণী গান Bayat Song বায়াত Saimum 2021 সাইমুম",
    "saimum shilpogosthi",
    "473K",
    "8 months",
    // Not Requared "https://drive.google.com/file/d/1zAvQhkHeRqZwi4O7qSUTqH1J2c3h6XNh/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629379388673-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T132332Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=04720e8d586c9d3180bbd32b1ecfbce887fcc80b7ea901922d462be5da59c7058231dc739b226f67a158847fc328a54f07be0fd3cb1302105cf439bc6040c1f50d92ea587de8e6d0e3a1cf07739f5d64921023269741f68ab509998c95a44492402b9025211422a0cd8a483c226ecd1447e285669a4f61f549661b505e39d860df76a067f7afd23721ce4554a8ecc04457e362bd80aea7fc6d6f7a6c5f4c7ecb669076979c017a73c59f1b886ceca7d4ff0ebe46ee065f601021295ab7d64b7354db2cc5c0f5f0c496210fce1092bfdf6ae24a26b812a2ceed393b91fb485fe8f522c634bbe0694f9151f2dfcb404f3d475e4508c34e8b6659d3d38ff278f005"
    ],
    

    [
    "Mobile Network Booster - এখন সব জায়গায় নেটওয়ার্ক থাকবে!",
    "Sohag360",
    "142K",
    "5 weeks",
    // Not Requared "https://drive.google.com/file/d/17grbro1SgG3pBBfvP8N-f9-vG6_UE__f/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629379455597-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T132509Z&X-Goog-Expires=21600&X-Goog-SignedHeaders=host&X-Goog-Signature=2485152aef33ecd74562cb6ef81827dcb6d5a10b8b6d58ca34d9da6af3bcd0e52c6eb421e026313d2376f8d98f5d272e35f8500fc131a5cffc0f6b1533d95c274c6c7a07ad3098f5defd07cb94049190eb843fde1c25a401bb9603044fe343bf4edfdd0cb5b9c9b6d9ee720c85d84371fc2dda4cfa646c9353fe7b627e42f0a2ea1f2585a4e05fbc01cfa3517151900728956f3390da93109e489af2755cc5d3b6127b1e63826d001b75a68055c08ffb99b03146ee40a75d170bf51ab6600920a062d9568d2b4a721f011aa6f784184dba7ac800c2afdddb50d039651e95fdc1604500c67838e5895bfcaf9e0c0df927a72914d091d3e4dfd6d104e85e1811b8"
    ],
    
    
    [
    "How smartphones are made in Bangladesh? - A Factory Tour",
    "Sohag360",
    "441K",
    "1 month",
    // Not Requared "https://drive.google.com/file/d/1aKgaf1WeireF8X-ZGr25VdHlNWkMRQkM/preview"
    "https://storage.googleapis.com/sx-master/0f281be2dbfab7%2Ffiles%2F1629379543407-video.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=google-cloud-storage-prod%40digital-river-243009.iam.gserviceaccount.com%2F20210819%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210819T132706Z&X-Goog-Expires=21601&X-Goog-SignedHeaders=host&X-Goog-Signature=2902f375f527f1866b23e69dee78b8857af4a6de336b4042f8f8eed8c4f107cdfbd2e1289995e68605e75a953d74700fda889f9beea19123e0e9369a7ed85a623192df2c2b1a61bab73ad7009d63cbe0691c7b85bded52ac7d597a8afbb1f31938c4c7bed24c82a7280270c13ecef1aca56204d20b97fdad1d9c4f2f6d2d3bf9b7723964cbe76ce6c225dcbed0a03f741898670aec4a32b696ce9941db8b44558621451d03185fd9d3dc1bfdcd5feacd0cbcf04b51d7304ba6a7cf3d244f2880dca3e328d64f250fd6fe4d861aca6dc187fb4f708cc789f61bddafe366a7a56c9584328a97ef89e0563ce2130f6bc7342d46de4efa137e799f33cd835d9aab2c"
    ]
    
    
]


for (let index = 0; index < video_details.length; index++) {
    let element = document.querySelector(".content_part")

    element.innerHTML += `
    
    <div class='thumb_vid_wrapper'>
    <div class='thumb_wrapper'>
        <img class="thumbnail" src="thumbs_and_videos/Video-${index+1}/Thumb.jpg">
    </div>

    <div class='title_wrapper'>
        <div class='left_channel'><img class='profile_pic' src='Channels/${video_details[index][1]}.jpg'></div>

        <div class='right_title'>
            <div class='right_top_title'> ${video_details[index][0]}</div>

            <div class='right_chnl_title'>
                <div class='chnl_name'>
                    <h6> ${video_details[index][1]}</h6>
                    <i class='fas fa-check-circle'></i>
                </div>

                <div class='right_time_title'><span>${video_details[index][2]} views</span> <span class="point" style ="font-size: 4px !important; padding: 0px 5px;"><i class='fas fa-circle'></i></span> <span>${video_details[index][3]} ago</span></div>
            </div>

        </div>
    </div>
</div>

    `
}

for (let i = 0; i < 9; i++) {
    let braille= document.querySelector(".braille")

    braille.innerHTML += `
        <div class="squre_braille"></div>
    `
}


let content_part = document.querySelector(".content_part")
let yt_home_logo = document.getElementById("youtube_home_logo")
let video_thumb = document.querySelectorAll(".thumb_vid_wrapper")
let left_menu_wrapper = document.querySelector(".left_menu_wrapper")
let tab_title = document.querySelector("#tab_title")
let play_part = document.querySelector(".play_part")
let main_part = document.querySelector(".main_part")
let back_btn = document.querySelector(".back_btn")
let header_bar = document.querySelector(".header_bar")
let bars_div = document.querySelector(".bars_div")


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


video_thumb.forEach( (number,i) => {

    number.addEventListener('click', ()=> {
        tab_title.innerHTML = video_details[i][0]
        topFunction()
        left_menu_wrapper.style.display = "none"
        main_part.setAttribute("style","padding: 25px 40px;")
        content_part.classList.add("content_when_played")
        header_bar.style.display = "none";
        back_btn.style.display = "inline-block";
        bars_div.style.paddingTop = "7px";
        
        play_part.innerHTML = `
    <div class="play_page_container">

        <div class="play_page_left">
    
            <div class="play_video_wrapper">
                <video onclick="PlayPause()" id="videos" src="${video_details[i][4]}" allowfullscreen autoplay></video>
                <div onclick="PlayPause()" class="overly_poster"><i id="playPause_btn" class="fas fa-pause"></i></div>

            <div class="range_wrapper">
                <div class="inp_range">
                    <input value="0" min="0" max="100" type="range" name="range" id="rangeId" step="1">
                </div>
                
                <div class="dur_play_wrapper">
                    
                <div><i onclick="PlayPause()" id="playPause_btn2" class="fas fa-pause"></i></div>
            
                    <div class="duration_wrapper">
                        <div class="left_duration">
                            <div class="minute">0</div>
                            <div>:</div>
                            <div class="second">0</div>
                        </div>
                        <p>/</p>
                        <div class="right_duration">
                            <div class="minute_duration">0</div>
                            <div>:</div>
                            <div class="second_duration">0</div>
                        </div>
                    </div>
                </div>
            
            </div>


        </div>
    
            <div class="video_title">
                <div class="video_heading"><h3>${video_details[i][0]}</h3></div>
                <div class="video_options_wrapper">
    
                    <div class="right_time_title"><span>${video_details[i][2]} views</span> <span class="point" style ="font-size: 4px !important; padding: 0px 5px;"><i class='fas fa-circle'></i></span> <span>${video_details[i][3]} ago</span></div>
                    <div class="video_react">
    
                        <div class="reactions">
                            <img id="like" src="https://img.icons8.com/material-outlined/24/000000/thumb-up.png"/>
                            <img id="unlike" src="https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"/>
                        </div>
    
                        <div class="share">
                            <i class="fas fa-share"></i>
                            <span class= "share_text">Share</span>
                        </div>
    
                        <div class="save">
                            <i class="fas fa-save"></i>
                            <span class= "save_text">Save</span>
                        </div>
    
                        <div class="vid_menu">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
    
    
                    </div>
    
                </div>
            </div>
    
            <div class="channel_details">
    
                <div class="vid_chnl_wrapper">
                    <div class='left_channel  video-play_chnl_logo'><img class='profile_pic' src='Channels/${video_details[i][1]}.jpg'></div>
                    
                    <div class="chnl_name_video_play_wrapper">
                        <div class='chnl_name chnl_name_video_play'>
                            <h6> ${video_details[i][1]}</h6>
                            <i class='fas fa-check-circle'></i>
                        </div>
    
                        <div class="subscribers_count">2.26 lakh subscribers</div>
                    </div>
    
                </div>
    
                
                <div class="subscribe_wrapper">
                    <img src= "subscribe.png">
                </div>
    
            </div>
    
        </div>
      
    </div>  `


let VideoTag = document.getElementById("videos")
let range = document.querySelector("#rangeId");
let minute = document.querySelector(".minute");
let minute_duration = document.querySelector(".minute_duration");
let second = document.querySelector(".second");
let second_duration = document.querySelector(".second_duration");
let play_btn = document.querySelector("#playPause_btn")
let play_btn2 = document.querySelector("#playPause_btn2")

range.addEventListener("input", VidSeek);
VideoTag.addEventListener("timeupdate", seektimeupdate)


function seektimeupdate() {
    let new_time = VideoTag.currentTime * (100/VideoTag.duration)
    range.value = new_time;

    minute.innerHTML = (VideoTag.currentTime/60);
    minute_duration.innerHTML = (VideoTag.duration/60);

    if ((VideoTag.currentTime%60)<10) {
        second.innerHTML = "0" + (VideoTag.currentTime%60);
    } else{
        second.innerHTML = (VideoTag.currentTime%60);
    }

    if ((VideoTag.duration%60)<10) {
        second_duration.innerHTML = "0" + (VideoTag.duration%60);
    } else{
        second_duration.innerHTML = (VideoTag.duration%60);
    }
        
    if (VideoTag.currentTime == VideoTag.duration) {
        play_btn.classList.add("fa-play");
        play_btn.classList.remove("fa-pause");
        play_btn2.classList.add("fa-play");
        play_btn2.classList.remove("fa-pause");
        play_btn.setAttribute("style", "transform: translateY(0px); transition:.2s; opacity: 1;")
    }

}


function VidSeek() {
    let seekto = VideoTag.duration * (range.value/100)
    VideoTag.currentTime = seekto;
}



        let like = document.querySelector("#like")
        let unlike = document.querySelector("#unlike")

        let liked = false;
        let unliked = false;
        
        let like_link = "https://img.icons8.com/material-sharp/24/000000/thumb-up.png"
        let removed_like_link = "https://img.icons8.com/material-outlined/24/000000/thumb-up.png"
        
        let unlike_link = "https://img.icons8.com/material-sharp/24/000000/thumbs-down.png"
        let removed_unlike_link = "https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"

    
        like.addEventListener("click", function() {

            if (!liked) {
                liked = true
                unliked = false
                like.src = like_link;
                unlike.src = removed_unlike_link;
            } else if (liked) {
                liked = false
                unliked = true
                like.src = removed_like_link;
            }

        });
        

        unlike.addEventListener("click", function() {

            if (!unliked) {
                unliked = true
                liked = false
                unlike.src = unlike_link;
                like.src = removed_like_link;
            } else if (unliked) {
                unliked = false
                liked = true
                unlike.src = removed_unlike_link;
            }

        });
        


    })

})


function PlayPause() {
    let VideoTag = document.querySelector("#videos")
    let play_btn = document.querySelector("#playPause_btn")
    let play_btn2 = document.querySelector("#playPause_btn2")
    let overly_poster = document.querySelector(".overly_poster")
    let range_wrapper = document.querySelector(".range_wrapper")

    overly_poster.classList.toggle('overlys')
    range_wrapper.classList.toggle('overlys')

    if(VideoTag.paused) {
        VideoTag.play()
        play_btn.classList.add("fa-pause");
        play_btn.classList.remove("fa-play");
        play_btn2.classList.add("fa-pause");
        play_btn2.classList.remove("fa-play");
        play_btn.setAttribute("style", "transform: translateY(50px); transition:.2s;opacity:0")

    } else if (VideoTag.played) {
        VideoTag.pause()
        play_btn.classList.add("fa-play");
        play_btn.classList.remove("fa-pause");
        play_btn2.classList.add("fa-play");
        play_btn2.classList.remove("fa-pause");
        play_btn.setAttribute("style", "transform: translateY(0px); transition:.2s; opacity: 1;")

    }

}