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
