var transkripsiyon=["[ءاأإئؤ]· e- i- ü-'","ب·be-bi-bu","ت·te-ti-tü","ث·se-si-sü","ج·ce-ci-cu","ح·ḥa-ḥi-ḥu","خ·ẖa-ẖi-ẖu","د·de-di-du","ذ·ze-zi-zü","ر·ra-ri-ru","ز·ze-zi-zu","س·se-si-su","ش·şe-şi-şu","ص·sa-si-su","ض·ḍa-ḍi-ḍu","ط·ṭa-ṭi-ṭu","ظ·ẓa-ẓi-ẓu","ع·ʿa-ʿi-ʿu-ğ","غ·ğa-ği-ğu","ف·fe-fi-fu","ق·ga-gi-gu","ك·ke-ki-kü","ل·le-li-lü","م·me-mi-mü","ن·ne-ni-nu","و·ve-vi-vu","ه·he-hi-hu","ة·te-ti-tü","ى·ye-yi-yu","ي·ye-yi-yu"]

//harekeler
var ustun=String.fromCharCode(1614), ikiUstun=String.fromCharCode(1611), esre=String.fromCharCode(1616), ikiEsre=String.fromCharCode(1613), otre=String.fromCharCode(1615), ikiOtre=String.fromCharCode(1612), uzunUstun=String.fromCharCode(1648)
var cezm=String.fromCharCode(1618),sedde=String.fromCharCode(1617)

var harekeler=ustun+esre+otre+ikiUstun+ikiEsre+ikiOtre+uzunUstun+cezm+sedde
var tenvin=ikiUstun+ikiEsre+ikiOtre, noTenvin=ustun+esre+otre+uzunUstun

// harfler
var elif=String.fromCharCode(1575),be=String.fromCharCode(1576),te=String.fromCharCode(1578),se=String.fromCharCode(1579)
var cim=String.fromCharCode(1580)
var ha=String.fromCharCode(1581),hi=String.fromCharCode(1582), dal=String.fromCharCode(1583),zel=String.fromCharCode(1584)
var ra=String.fromCharCode(1585),ze=String.fromCharCode(1586)

var sin =String.fromCharCode(1587),shin=String.fromCharCode(1588)
var sad =String.fromCharCode(1589),dad=String.fromCharCode(1590)
var ti=String.fromCharCode(1591),zi=String.fromCharCode(1592)

var ayin=String.fromCharCode(1593),gayin=String.fromCharCode(1594)

var fe=String.fromCharCode(1601),kaf=String.fromCharCode(1602),kef=String.fromCharCode(1603)
var lam=String.fromCharCode(1604),mim=String.fromCharCode(1605),nun=String.fromCharCode(1606)
var vav=String.fromCharCode(1608),he=String.fromCharCode(1607),ye1=String.fromCharCode(1610),ye2=String.fromCharCode(1609),ye=ye1+ye2

var izhar=te+se+cim+dal+zel+ze+sin+shin+sad+dad+ti+zi+fe+kaf+kef
var hemze=elif+String.fromCharCode(1569)+String.fromCharCode(1570)+String.fromCharCode(1571)+String.fromCharCode(1573)+String.fromCharCode(1574)

function ayetTespit(){
	sure=id("sureAdi").value.trim()
	
	ikiNokta=sure.indexOf(":")
	if(sure==eskiDeger || (sure.indexOf(" ")==-1 && sure.indexOf(":")==-1)){return}
	
	eskiDeger=sure

	if(ikiNokta>-1){
		sure=sure.split(":")
		sure[0]=sureler[parseInt(sure[0])-1]["name"].split("·")[0]
		sure=sure.join(" ")
		}
	
	bosluk=sure.lastIndexOf(" ")
	ilk=sure.charAt(bosluk+1)
	
	if(!isNaN(ilk)){sure=sure.substring(0,bosluk)+"·"+sure.substring(bosluk+1)}
	
	sure=sure.split("·")
	
	if( !isNaN(sure[0]) ){sure[0]=sureler[parseInt(sure[0])-1]["name"].split("·")[0]}
	
	sure[0]=aramaFiltresi(sure[0])
	
	//alert(aramaFiltresi(sureler[0]["name"]).split("·")[0])
	
	sureNo=false
	
	for(i=0; i<=sureler.length-1;i++){
		if(sure[0]==aramaFiltresi(sureler[i]["name"].split("·")[0])){
			sureNo=i+1;
			break;
			}	
		}
	
	if(!sureNo){alert("Sure adı anlaşılamadı!");return}
	
	bas=false;son=false
	
	if(!sure[1]){bas=1; son=sureler[sureNo-1]["ayetSayisi"]}
	else if(sure[1].indexOf("-")==-1){bas=parseInt(sure[1]);son=bas}
	else{sure[1]=sure[1].split("-");bas=parseInt(sure[1][0]);son=parseInt(sure[1][1])}
	
	if(bas>son){gecici=bas;bas=son;son=gecici}
	
	if(bas<1 || son<1){alert("Ayet numaraları, 1’den küçük olamaz");return}
	
		if(bas>sureler[i]["ayetSayisi"] || son>sureler[i]["ayetSayisi"]){alert(sureler[i]["name"].split("·")[0]+" Sûresi, "+sureler[i]["ayetSayisi"]+" âyettir. Bu yüzden âyet sayısı, "+sureler[i]["ayetSayisi"]+" sayısından fazla olamaz!");return}
		
	}

function ayetlereBol(b$){
	b$=b$.replace(/<br>|\n|\u06DE/g,"·")
	b$=b$.replace(/[\u0660-\u0669\u06f0-\u06f9]/g,"")
	
	id("gizliDiv").innerHTML="&#64831;&#64830;"
	
	b$=eval("b$.replace(/"+id("gizliDiv").innerHTML+"/g,'·')")
	
	//alert(b$)
	
	b$=b$.split("·")	
	return b$
	}

function ayettenKes(a1,a2,a3,a4){
	
	baslangic=(a1.substring(0,a2)).lastIndexOf(" ")
	bitis=a1.indexOf(" ",a3)
	
	if(baslangic==-1){baslangic=0}
	if(bitis==-1){bitis=a1.length}
	
	obek=a1.substring(baslangic,bitis).trim()
	
	if(a4==2 || a4==6 || a4==7 || a4==8){
		kural=a1.substring(a2-1,a3)
		if(obek.indexOf(kural)>-1){
			yeniobek=obek.substring(0,obek.indexOf(kural)+1 )
			yeniobek+="<span>"+obek.substring(obek.indexOf(kural)+1,obek.indexOf(kural)+kural.length+1)+"</span>"
			yeniobek+=obek.substring(obek.indexOf(kural)+kural.length+1)
			obek=yeniobek
			//obek=""
			}
		}	
	
	if(a4==3 || a4==10){
		kural=a1.substring(a2-1,a3)
		if(obek.indexOf(kural)>-1){
			yeniobek=obek.substring(0,obek.indexOf(kural) )
			yeniobek+="<span>"+obek.substring(obek.indexOf(kural),obek.indexOf(kural)+kural.length+1)+"</span>"
			yeniobek+=obek.substring(obek.indexOf(kural)+kural.length+1)
			obek=yeniobek
			//obek=""
			}
		}
	
	if(a4==5 || a4==1){
		kural=a1.substring(a2,a3)
		if(obek.indexOf(kural)>-1){
			yeniobek=obek.substring(0,obek.indexOf(kural))
			yeniobek+="<span>"+obek.substring(obek.indexOf(kural),obek.indexOf(kural)+kural.length+2)+"</span>"
			yeniobek+=obek.substring(obek.indexOf(kural)+kural.length+2)
			obek=yeniobek
			}
		}
	
	return 	obek
	}

function dokumAl(e1){

	maximum=5
	sira=0,satir=0
	table="<table class='Tecvitli' border='1' cellspacing='0' cellpadding='5'><tr>"
			
	for(i=e1.length-1; i>=0;i--){
		table+="<td class='Arapca' style='font-size:28px'>"+e1[i]
		okunus$=okunusRutus(e1[i])
		table+=okunusBul("<p class='okunus bul'>"+okunus$+"</p>")
		table+="</td>"	
		sira++
		if(sira==maximum){sira=0;satir++;table+="</tr><tr>"}	
		}
		
	if(sira<maximum && sira>0 && satir>0){table+="<td colspan='"+(maximum-sira)+"' class='empty'>&nbsp;</td>"}
	
	table+="</tr></table>"
	table=table.replace(/<tr><\/tr>/g,"")

	return table
	}

function idgamBul(){
	gecici=[]
	
	e$="<h3>"+baslikNo+". İdğam’lar</h3>"
		e$+="<p class='onBilgi'>Birbirinin aynı olan veya aynı cinsten olan (birbirlerine yakınlığı olan) harflerden ilki sakin (yani cezimli) ya da tenvinli (yani iki üstün, iki esre veya iki ötreli), ikincisi harekeli olarak geldiğinde, birincisini ikincisine katmaya (birinci harfi ikinci harfe çevirerek ikinci harfi şeddeli imiş gibi okumaya) idğam denir.</p>"
	e$+="<p>İdğâm çeşitleri şunlardır:</p>"
	
	e$+="<h4>a) İdğâm-ı Meal Gunne</h4>"
		e$+="<p>Bir kelime, <b>Tenvin</b> (iki üstün, iki esre ve iki ötre) ya da <b>Nun-u Sâkin</b>’le (<span class='Arapca'>نْ</span>) bitip ardından gelen kelime, “Mim” (<span class='Arapca'>م</span>), “Nun” (<span class='Arapca'>ن</span>), “Vav” (<span class='Arapca'>و</span>) ve “Ye” (<span class='Arapca'>ى</span>) harflerinden biri ile başlarsa buna <b>İdğâm-ı Meal Gunne</b>, yani “gunneli idğâm” denir.</p>"

	e$+="<p>Yukarıdaki ayetlerde yer alan idğam-ı meal gunne’ler şunlardır:</p>"
	
	for(i=0; i<=Ayet$.length-1;i++){
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-1;j++){
			if(tenvin.indexOf(A$[j])>-1 || (A$[j]==cezm && A$[j-1]==nun)){
				
				if(A$[j+1]==" " && A$[j+2]){
					if(A$[j+2]==mim || A$[j+2]==nun || A$[j+2]==vav || A$[j+2]==ye1 || A$[j+2]==ye2){
						kelime=ayettenKes(A$,j-1,j+2,5)
						//if(kelime.indexOf(" ")==-1){kelime=ayettenKes(A$,j-1,j+4)}
						gecici.push(kelime)
						
						//alert(kelime)
						}
					}
				
				}
			}
		}

	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	//alert(uzunluk2)
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> idğam-ı meal gunne bulundu."
		
	}else{
		e$+="<p>İdğam-ı meal gunne bulunamadı."
		}
	e$+="</p>"
	
	gecici=[]
	e$+="<h4>b) İdğâm-ı Bilâ Gunne</h4>"
		e$+="<p>Bir kelime, <b>Tenvin</b> (iki üstün, iki esre ve iki ötre) ya da <b>Nun-u Sâkin</b>’le (<span class='Arapca'>نْ</span>) bitip ardından gelen kelime, “Lem” (<span class='Arapca'>ل</span>) ya da “Ra” (<span class='Arapca'>ر</span>) harflerinden biri ile başlarsa buna <b>İdğâm-ı Bilâ Gunne</b>, yani “gunnesiz idğâm” denir. <b>Tenvin’in idgamında</b>; tenvin tek harekeye düşer ve ikinci harf şeddeli imiş gibi okunur. <b>Sakin nun’un idğamında</b> ise; sakin nun okunmaz ve ikinci harf şeddeli imiş gibi okunur.</p>"
	e$+="<p>Yukarıdaki ayetlerde yer alan idğam-ı bilâ gunne’ler şunlardır:</p>"

	for(i=0; i<=Ayet$.length-1;i++){
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-1;j++){
			if(tenvin.indexOf(A$[j])>-1 || (A$[j]==cezm && A$[j-1]==nun)){
				
				if(A$[j+1]==" " && A$[j+2]){
					if(A$[j+2]==lam || A$[j+2]==ra){
						kelime=ayettenKes(A$,j-1,j+2,5)
						//if(kelime.indexOf(" ")==-1){kelime=ayettenKes(A$,j-1,j+4)}
						gecici.push(kelime)
						
						//alert(kelime)
						}
					}
				
				}
			}
		}

	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	//alert(uzunluk2)
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> idğam-ı bila gunne bulundu."
		
	}else{
		e$+="<p>İdğam-ı bila gunne bulunamadı."
		}
	e$+="</p>"
	
	
	gecici=[]
	e$+="<h4>c) İdğâm-ı Misleyn</h4>"
		e$+="<p>Bir harf <b>cezimli</b> <span class='Arapca'>(ْ )</span> olup kendisinden sonra yine aynı harf harekeli bir şekilde gelirse <b>idğam-ı misleyn</b> meydana gelir ve bu harfler, şeddeli gibi okunur. Eğer bu aynı harfler, “Mim” (<span class='Arapca'>م</span>) ya da  “Nun” (<span class='Arapca'>ن</span>) harfleri değilse gunne yapılmaz.</p>"
		
	e$+="<p>Yukarıdaki ayetlerde yer alan idğam-ı misleyn’ler şunlardır:</p>"

	for(i=0; i<=Ayet$.length-1;i++){
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-1;j++){
			if(A$[j]==cezm){
				if((A$[j-1]==A$[j+1]) || (ye.indexOf(A$[j-1])>-1 && ye.indexOf(A$[j+1])>-1) || (A$[j+1]==" " && A$[j-1]==A$[j+2]) ){
					kelime=ayettenKes(A$,j-1,j+2,5)
					gecici.push(kelime)
					}
				}
			}
		}

	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	//alert(uzunluk2)
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> idğam-ı misleyn bulundu."
		
	}else{
		e$+="<p>İdğam-ı misleyn bulunamadı."
		}
	e$+="</p>"




	
	return e$+"</p>"
	}

function ihfaBul(){
	e$="<h3>"+baslikNo+". İhfâ’lar</h3>"
		e$+="<p class='onBilgi'><b>İhfa</b>, nûn sesini genizde gizlemek, başka bir deyişle gunneli okumak demektir. <b>Tenvin</b> (iki üstün, iki esre ya da iki ötre) ya da <b>nun-u sâkin</b>’den (<span class='Arapca'>نْ</span>) sonra “te” (<span class='Arapca'>ت</span>), “peltek se” (<span class='Arapca'>ث</span>), “cim” (<span class='Arapca'>ج</span>), “dal” (<span class='Arapca'>د</span>), “zel” (<span class='Arapca'>ذ</span>), “ze” (<span class='Arapca'>ز</span>), "
	e$+="“sin” (<span class='Arapca'>س</span>), “şın” (<span class='Arapca'>ش</span>), “sad” (<span class='Arapca'>ص</span>), “dat” (<span class='Arapca'>ض</span>), “tı” (<span class='Arapca'>ط</span>), “zı” (<span class='Arapca'>ظ</span>), “fe” (<span class='Arapca'>ف</span>), “kaf” (<span class='Arapca'>ق</span>) "	
	e$+="ve “kef” (<span class='Arapca'>ك</span>) harflerinden biri gelirse ihfâ olur.</p>"
	e$+="<p>Yukarıdaki ayetlerde yer alan ihfâ’lar şunlardır:</p>"

	gecici=[]

	for(i=0; i<=Ayet$.length-1;i++){
		
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-2;j++){
			if( (A$[j]==cezm && A$[j-1]==nun) || tenvin.indexOf(A$[j])>-1){
				if(izhar.indexOf(A$[j+1])>0){
					if(harekeler.indexOf(A$[j+2])>-1){
						gecici.push(ayettenKes(A$,j-1,j+2,6))
						}
					}
				
				if(A$[j+1]==" " && (izhar.indexOf(A$[j+2])>0) )
					if(harekeler.indexOf(A$[j+3])>-1){
						gecici.push(ayettenKes(A$,j-1,j+3,6))
						}				
				}
			}
		
		}	

	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> ihfâ bulundu."
	}else{
		e$+="<p>İhfâ bulunamadı."
		}
	e$+="</p>"
	
	return e$
	}

function iklabBul(){
	e$="<h3>"+baslikNo+". İklâb’lar</h3>"
		e$+="<p class='onBilgi'><b>Tenvîn</b> (iki üstün, iki ötre ya da iki ötre) veya <b>Nûn-u Sakin</b>‘den (<span class='Arapca'>نْ</span>) sonra “Be” (<span class='Arapca'>ب</span>) harfi geldiğinde bulunduğunda tenvîn veya nûn-u sâkin‘in tamamen “Mim” (<span class='Arapca'>م</span>) harfine dönmesine ve genizden gelen bir sesle ihfâ yapılmasına (gizlenmesine) <b>İklâb</b> denir.</p>"
	e$+="<p>Yukarıdaki ayetlerde yer alan iklâb’lar şunlardır:</p>"

	gecici=[]
	
	
	
	
	for(i=0; i<=Ayet$.length-1;i++){
		
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-2;j++){
			if( (A$[j]==cezm || A$[j]==ikiUstun || A$[j]==ikiEsre || A$[j]==ikiOtre) && A$[j-1]==nun){
				if(A$[j+1]==be){
					gecici.push(ayettenKes(A$,j-1,j+1,1))
					}
				if(A$[j+1]==" " && A$[j+2]==be){
					gecici.push(ayettenKes(A$,j-1,j+2,1))
					}
				}
			}
		
		}

	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> iklab bulundu."
		
	}else{
		e$+="<p>İklab bulunamadı."
		}
	e$+="</p>"
	
	return e$
	}

function izharBul(){
	e$="<h3>"+baslikNo+". İzhâr’lar</h3>"
		e$+="<p class='onBilgi'><b>İzhâr</b>, sözlükte bir şeyi açıklamak ortaya çıkarmak demektir. <b>Tenvin</b> (iki üstün, iki esre ya da iki ötre) ya da <b>nun-u sâkin</b>’den (<span class='Arapca'>نْ</span>) sonra “elif” (<span class='Arapca'>ا</span>), “ha” (<span class='Arapca'>ح</span>), “ḫı” (<span class='Arapca'>خ</span>), “ayın” (<span class='Arapca'>ع</span>), “ğayın” (<span class='Arapca'>غ</span>) ve “yuvarlak he” (<span class='Arapca'>ه</span>) harflerinden biri gelirse izhâr olur.</p>"
	e$+="<p>Yukarıdaki ayetlerde yer alan izhâr’lar şunlardır:</p>"

	gecici=[]

	for(i=0; i<=Ayet$.length-1;i++){
		
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-2;j++){
			if( (A$[j]==cezm && A$[j-1]==nun) || tenvin.indexOf(A$[j])>-1){
				if(A$[j+1]==elif || A$[j+1]==ha || A$[j+1]==hi|| A$[j+1]==ayin || A$[j+1]==gayin || A$[j+1]==he){
					if(harekeler.indexOf(A$[j+2])>-1){
						gecici.push(ayettenKes(A$,j-1,j+2,6))
						}
					}
				
				if(A$[j+1]==" " && (A$[j+2]==elif || A$[j+2]==ha || A$[j+2]==hi|| A$[j+2]==ayin || A$[j+2]==gayin || A$[j+2]==he) )
					if(harekeler.indexOf(A$[j+3])>-1){
						gecici.push(ayettenKes(A$,j-1,j+3,6))
						}				
				}
			}
		
		}	

	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> izhâr bulundu."
	}else{
		e$+="<p>İzhâr bulunamadı."
		}
	e$+="</p>"
	
	return e$
	}

function kalkaleBul(){
	e$="<h3>"+baslikNo+". Kalkale’ler</h3>"
		e$+="<p class='onBilgi'><b>Kalkale</b>, vurgulu yani üstüne basa basa okumak demektir. Bazı harfler, sakin olduklarında vurgulu okunurlar. Kalkale, başka bir deyişle harflerin çıkış yerlerinden kuvvetli bir ses ile okunmasıdır. Kalkale harfleri, “Be” (<span class='Arapca'>ب</span>) , “Cim” (<span class='Arapca'>ج</span>) , “Dal” (<span class='Arapca'>د</span>) , “Tı” (<span class='Arapca'>ط</span>) ve “Kaf” (<span class='Arapca'>ق</span>) ‘tır. Bu harflerin üzerinde sükun (yani cezm) işareti bulunduğunda kalkale meydana gelir ve o harfin üstüne basa basa okunur.</p>"
	e$+="<p>Yukarıdaki ayetlerde yer alan kalkale’ler şunlardır:</p>"

	gecici=[]
	
	for(i=0; i<=Ayet$.length-1;i++){
		
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-2;j++){
			if(A$[j]==cezm){
				if(A$[j-1]==be || A$[j-1]==cim || A$[j-1]==dal || A$[j-1]==ti || A$[j-1]==kaf){
					gecici.push(ayettenKes(A$,j-1,j,2))
					}
				}
			}
		
		}

	uzunluk1=gecici.length
	//gecici=unique(gecici)
	uzunluk2=gecici.length
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> kalkale bulundu."
		
	}else{
		e$+="<p>Kalkale bulunamadı."
		}
	e$+="</p>"

	return e$
	}

function meddiArizBul(){
	e$="<h3>"+baslikNo+". Medd-i Ârız’lar</h3>"
		e$+="<p class='onBilgi'><b>Harf-i Med</b>’den sonra <b>Sebeb-i Med</b>’den <b>Sükûn-u Ârız</b> (genellikle ayet sonlarındaki geçici sükun) gelirse <b>Medd-i Ârız</b> olur.</p>"
	e$+="<p>Yukarıdaki ayetlerde yer alan medd-i ârız’lar şunlardır:</p>"

	gecici=[]

	for(i=0; i<=Ayet$.length-1;i++){
		
		A$=Ayet$[i]
		A3=A$.charAt(A$.length-3)
		// 		

		
		if(A$.slice(-1)!=cezm){
			if(A3==elif || A3==vav || A3==ye1 || A3==ye2){
					if(A$.charAt(A$.length-5)==sedde){
						gecici.push(ayettenKes(A$,A$.length-5,A$.length,3))
					}else{
						gecici.push(ayettenKes(A$,A$.length-4,A$.length,10))
						A$.charAt(A$.length-3)
						}
				}			
			}
		
		
		}


	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length

	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> medd-i ârız bulundu."
		if(uzunluk1!=uzunluk2){e$+=" (Farklı ayetlerdeki <b>"+(uzunluk1-uzunluk2)+"</b> aynı medd-i ârız elendi.)"}
	}else{
		e$+="<p>Medd-i ârız bulunamadı."
		}
	e$+="</p>"


	return e$
	}

function meddiMunfasilBul(){

	e$="<h3>"+baslikNo+". Medd-i Munfasıl’lar</h3>"
		e$+="<p class='onBilgi'>Bir kelimenin sonunda <b>harf-i med</b>’den biri (<span class='Arapca'>ا و ى</span>) harekesiz olduğunda ve ondan sonraki kelimenin ilk harfinde <b>sebeb-i med</b>’den hemze (<span class='Arapca'>ء</span>) bulunduğunda, <b>medd-i munfasıl</b> olur.</p>"

	e$+="<p>Yukarıdaki ayetlerde yer alan medd-i munfasıl’lar şunlardır:</p>"

	gecici=[]

	for(i=0; i<=Ayet$.length-1;i++){
		
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-2;j++){
			if(A$[j]==elif || A$[j]==vav || A$[j]==ye1 || A$[j]==ye2){
				if(A$[j+1]==" " && (noTenvin.indexOf(A$[j-1]>-1) || noTenvin.indexOf(A$[j-2]>-1) ) ){
					
					if(hemze.indexOf(A$[j+2])>-1 && harekeler.indexOf(A$[j+3])>-1){
						gecici.push(ayettenKes(A$,j,j+3,7))
						}

					}
				
			
				}
			}
		
		}	

	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> medd-i munfasıl bulundu."
	}else{
		e$+="<p>Medd-i munfasıl bulunamadı."
		}
	e$+="</p>"
	
	return e$
	}

function meddiMuttasilBul(){

	e$="<h3>"+baslikNo+". Medd-i Muttasıl’lar</h3>"
		e$+="<p class='onBilgi'>Aynı kelimede <b>harf-i med</b>’den biri (<span class='Arapca'>ا و ى</span>) harekesiz olduğunda ve sonraki harf <b>sebeb-i med</b>’den hemze (<span class='Arapca'>ء</span>) olduğunda, <b>medd-i muttasıl</b> olur.</p>"

	e$+="<p>Yukarıdaki ayetlerde yer alan medd-i muttasıl’lar şunlardır:</p>"

	gecici=[]

	for(i=0; i<=Ayet$.length-1;i++){
		
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-2;j++){
			if(A$[j]==elif || A$[j]==vav || A$[j]==ye1 || A$[j]==ye2){
				if(noTenvin.indexOf(A$[j-1]>-1) || noTenvin.indexOf(A$[j-2]>-1)){
					
					if(hemze.indexOf(A$[j+1])>-1 && harekeler.indexOf(A$[j+2])>-1){
						gecici.push(ayettenKes(A$,j,j+2,8))
						}

					}
				
			
				}
			}
		
		}	

	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>Toplam <b>"+uzunluk2+"</b> medd-i muttasıl bulundu."
	}else{
		e$+="<p>Medd-i muttasıl bulunamadı."
		}
	e$+="</p>"
	
	return e$
	}

function meddiTabiiBul(){
	gecici=[]
	
	e$="<h3>"+baslikNo+". Medd-i Tabii’ler</h3>"
		e$+="<p class='onBilgi'>Meddi Tabii, kelime anlamı olarak <b>doğal bir şekilde uzatmak</b> anlamına gelir. Bir kelime içinde harfi med, yani “elif” ( <span class='Arapca'>&#1575;</span> ), “vav” ( <span class='Arapca'>&#1608;</span> ) ya da  “ye” ( <span class='Arapca'>&#1609;</span> ) harflerinden biri harekesiz olarak bulunursa medd-i tabii meydana gelir.</p>"
	e$+="<p>Yukarıdaki ayetlerdeki medd-i tabiiler, yani doğal medler şunlardır:</p>"	
	
	
	
	for(i=0; i<=Ayet$.length-1;i++){
		A$=Ayet$[i]
		
		for(j=1; j<=A$.length-1;j++){
			if(A$[j]==elif || A$[j]==vav || A$[j]==ye1 || A$[j]==ye2){
				if(harekeler.indexOf(A$[j+1])==-1 && A$.substring(j,j+2)!=elif+lam && tenvin.indexOf(A$[j-1])==-1 && A$[j+2]!=cezm){
					
	
					
					kelime=ayettenKes(A$,j-1,j,3)
					gecici.push(kelime)
					
					}
				}
			}
		

		}
	
	uzunluk1=gecici.length
	gecici=unique(gecici)
	uzunluk2=gecici.length
	
	
	if(gecici.length>0){
		e$+=dokumAl(gecici)
		e$+="<p>İçinde medd-i tabii bulunan <b>"+uzunluk2+"</b> kelimede toplam <b>"+uzunluk1+"</b> medd-i tabii bulundu."
		if(uzunluk1!=uzunluk2){e$+=" Bazı kelimelerde birden fazla medd-i tabii yer alıyor."}
	}else{
		e$+="<p>Medd-i tabii bulunamadı."
		}
	
	return e$+"</p>"
	}

function tecvitBul(){
	baslikNo=1
	
	Ayet$=id("Ayet").value
	
	Ayet$=ayetlereBol(Ayet$)
	
	for(i=0;i<=Ayet$.length-1;i++){
		id("gizliDiv").innerText=Ayet$[i]
		Ayet$[i]=id("gizliDiv").innerText
		}
	
	a$="<h2>Üstteki Ayetlerin Tecvit Analizi</h1>"
	
	if(id("kural3").checked){a$+=meddiTabiiBul();baslikNo++}
	if(id("kural10").checked){a$+=meddiArizBul();baslikNo++}
	if(id("kural7").checked){a$+=meddiMunfasilBul();baslikNo++}
	if(id("kural8").checked){a$+=meddiMuttasilBul();baslikNo++}
	if(id("kural5").checked){a$+=idgamBul();baslikNo++}
	if(id("kural6").checked){a$+=izharBul();baslikNo++}
	if(id("kural12").checked){a$+=ihfaBul();baslikNo++}
	if(id("kural1").checked){a$+=iklabBul();baslikNo++}
	if(id("kural2").checked){a$+=kalkaleBul();baslikNo++}
	
	id("sonucAlani").innerHTML=a$
	
	id("sonucAlani").style.display="block"
	window.location="#sonucAlani"
	}

function unique(a){
	var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
	}