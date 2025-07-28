import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [consultantOpen, setConsultantOpen] = useState(false);

  const emotions = [
    { name: "Радость", color: "bg-coral", icon: "Smile", description: "Подарки, вызывающие яркие положительные эмоции" },
    { name: "Благодарность", color: "bg-mint", icon: "Heart", description: "Способы выразить искреннюю признательность" },
    { name: "Ностальгия", color: "bg-lavender", icon: "Camera", description: "Воспоминания и дорогие сердцу моменты" },
    { name: "Вдохновение", color: "bg-sky-blue", icon: "Lightbulb", description: "Мотивация к новым свершениям" },
    { name: "Умиротворение", color: "bg-ddaadd-yellow", icon: "Leaf", description: "Спокойствие и гармония души" }
  ];

  const giftCategories = [
    {
      title: "Персональные подарки",
      image: "img/7c9dfded-83f4-4168-8521-c376edb03237.jpg",
      description: "Уникальные подарки, созданные специально для получателя",
      items: ["Персонализированные украшения", "Фотокниги с воспоминаниями", "Именные аксессуары"]
    },
    {
      title: "Подарки по эмоциям",
      image: "img/1cc3fb30-5b5d-49c6-bfb0-80bea5dc2ea1.jpg",
      description: "Тщательно подобранные подарки для каждой эмоции",
      items: ["Наборы для радости", "Комплекты благодарности", "Коллекции вдохновения"]
    },
    {
      title: "Подарки-впечатления",
      image: "img/2c6a01f9-b128-4e34-9f7e-a98761bea037.jpg",
      description: "Незабываемые моменты вместо материальных вещей",
      items: ["Мастер-классы", "Spa-процедуры", "Концерты и выставки"]
    }
  ];

  const reviews = [
    { name: "Анна К.", text: "Заказала подарок для мамы на тему 'благодарность'. Мама плакала от счастья!", rating: 5 },
    { name: "Михаил С.", text: "Подарок-впечатление превзошел все ожидания. Очень креативный подход!", rating: 5 },
    { name: "Елена В.", text: "Консультант помог подобрать идеальный подарок. Получатель был в восторге!", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight">Эмоции</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#personalized" className="text-sm font-medium hover:text-primary transition-colors">Персональные</a>
            <a href="#experiences" className="text-sm font-medium hover:text-primary transition-colors">Впечатления</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Dialog open={consultantOpen} onOpenChange={setConsultantOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                Консультант
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Онлайн-консультант по подбору подарков</DialogTitle>
                <DialogDescription>
                  Расскажите о получателе и желаемой эмоции, и мы подберем идеальный подарок
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Для кого подарок?</label>
                  <Input placeholder="Мама, друг, коллега..." />
                </div>
                <div>
                  <label className="text-sm font-medium">Какую эмоцию хотите вызвать?</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option value="">Выберите эмоцию</option>
                    {emotions.map((emotion) => (
                      <option key={emotion.name} value={emotion.name}>{emotion.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Дополнительная информация</label>
                  <Textarea placeholder="Увлечения, интересы, особенности характера..." />
                </div>
                <Button className="w-full">Получить рекомендации</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Подарки, которые создают эмоции
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Мы создаем и доставляем персонализированные подарки, специально подобранные для вызова определенных эмоций — 
              радости, благодарности, ностальгии, вдохновения или умиротворения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="Search" className="mr-2 h-5 w-5" />
                Найти подарок
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emotions Section */}
      <section id="catalog" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Выберите эмоцию</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждая эмоция требует особого подхода. Выберите то чувство, которое хотите подарить.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {emotions.map((emotion) => (
              <Card key={emotion.name} className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                <CardHeader className="text-center pb-3">
                  <div className={`w-16 h-16 ${emotion.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={emotion.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{emotion.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {emotion.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Categories */}
      <section id="personalized" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Категории подарков</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От персональных сувениров до незабываемых впечатлений — найдите идеальный способ выразить свои чувства.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm">
                        <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Посмотреть все</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Как это работает</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Простой процесс создания идеального подарка в несколько шагов.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Выберите эмоцию", description: "Определите, какое чувство хотите вызвать", icon: "Heart" },
              { step: "2", title: "Расскажите о человеке", description: "Поделитесь информацией о получателе", icon: "User" },
              { step: "3", title: "Получите рекомендации", description: "Наш ИИ подберет идеальный подарок", icon: "Sparkles" },
              { step: "4", title: "Доставка", description: "Мы доставим подарок в красивой упаковке", icon: "Package" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Icon name={step.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground">
                    {step.step}
                  </Badge>
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Отзывы клиентов</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Истории наших клиентов о том, как подарки изменили их отношения.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm mb-4 italic">"{review.text}"</p>
                <p className="text-sm font-semibold">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-6">О компании Эмоции</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Мы верим, что лучшие подарки — это не просто вещи, а эмоции, которые они вызывают. 
            Наша команда психологов, дизайнеров и кураторов создает уникальные подарочные решения, 
            способные затронуть самые тонкие струны души.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Счастливых получателей</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5 лет</div>
              <p className="text-sm text-muted-foreground">Опыта в создании эмоций</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Условия доставки</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Truck" className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Быстрая доставка</h4>
                    <p className="text-sm text-muted-foreground">По Москве — в день заказа, по России — 1-3 дня</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Gift" className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Красивая упаковка</h4>
                    <p className="text-sm text-muted-foreground">Каждый подарок упакован с особым вниманием к деталям</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Shield" className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Гарантия качества</h4>
                    <p className="text-sm text-muted-foreground">100% гарантия качества или возврат средств</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 text-primary mr-3" />
                  <span>+7 (980) 187-20-23</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 text-primary mr-3" />
                  <span>hello@emotions-gifts.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mr-3" />
                  <span>Москва, ул. Подарочная, д. 1</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 text-primary mr-3" />
                  <span>Ежедневно с 9:00 до 21:00</span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Следите за нами</h4>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Icon name="Instagram" className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Icon name="Facebook" className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Icon name="MessageCircle" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="h-6 w-6" />
                <span className="text-lg font-bold">Эмоции</span>
              </div>
              <p className="text-sm opacity-80">
                Создаем подарки, которые трогают сердце и остаются в памяти навсегда.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Каталог</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Подарки радости</a></li>
                <li><a href="#" className="hover:opacity-100">Подарки благодарности</a></li>
                <li><a href="#" className="hover:opacity-100">Подарки ностальгии</a></li>
                <li><a href="#" className="hover:opacity-100">Подарки вдохновения</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Услуги</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Персональные подарки</a></li>
                <li><a href="#" className="hover:opacity-100">Подарки-впечатления</a></li>
                <li><a href="#" className="hover:opacity-100">Консультация</a></li>
                <li><a href="#" className="hover:opacity-100">Доставка</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Информация</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">О компании</a></li>
                <li><a href="#" className="hover:opacity-100">Отзывы</a></li>
                <li><a href="#" className="hover:opacity-100">Контакты</a></li>
                <li><a href="#" className="hover:opacity-100">Условия доставки</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20 text-center">
            <p className="text-sm opacity-60">
              © 2024 Эмоции. Все права защищены. Подарки, созданные с любовью.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;