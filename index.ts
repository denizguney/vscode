//Kullanıcı ve yetki seviyelerini modelleyen bir arayüz
interface User{

  id: number;
  username: string;
  role: "admin" | "user" | "guest";
  isActive: boolean;
}

//Örnek bir kullanıcı nesnesi oluşturalım 
const curentUser: User = {

  id: 1,
  username: "denizguney",
  role: "admin",
  isActive: true
};

//Kullanıcı durumunu kontrol eden fonksiyon
function checkUserAccess(user: User): string{

  if(user.isActive && user.role == "admin"){

    return 'Erişim reddedildi: ${user.username}';
  }
}

//Konsola yazdıralım
console.log(checkUserAccess(currentUser));

//Gelen veriyi dizi içinde saran jenerik fonksiyon
function wrapInArray<T>(item: T ): T[]{

  return [item];
}
const stringArray = wrapInArray("Güvenlik Araştırması"); //string [] döner
const numberArray = wrapInArray(2026); //number [] döner

console.log(string Array , numberArray);



class SecurityTask{

  constructor(public title: string, private status: string){}

  public getDetails(): string{


    return 'Görev ${this.title} | Durum: ${this.status}';
  }
}
const task = new SecurityTask("Redirect URI  Analizi", "Devam Ediyor");
console.log(task.getDetails());

