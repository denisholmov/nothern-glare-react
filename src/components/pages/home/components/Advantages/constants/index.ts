import { CalendarIcon } from "@/components/ui/icons/CalendarIcon";
import { CarIcon } from "@/components/ui/icons/CarIcon";
import { ClientsIcon } from "@/components/ui/icons/ClientsIcon";
import { FlashIcon } from "@/components/ui/icons/FlashIcon";
import { GuaranteeIcon } from "@/components/ui/icons/GuaranteeIcon";
import { ProfMasterIcon } from "@/components/ui/icons/ProfMasterIcon";
import { SafetyIcon } from "@/components/ui/icons/SafetyIcon";
import { WindowsIcon } from "@/components/ui/icons/WindowsIcon";

import type { AdvantageItem } from "../types";

export const advantagesList: AdvantageItem[] = [
  {
    id: 0,
    image: ProfMasterIcon,
    title: "Профессиональные мастера",
    text: "Каждый сотрудник проходит обучение и знает технологию правильной уборки",
  },
  {
    id: 1,
    image: SafetyIcon,
    title: "Безопасные средства для работы",
    text: "Используем только гипоаллергенные и экологичные составы",
  },
  {
    id: 2,
    image: CalendarIcon,
    title: "3 года опыта на рынке",
    text: "Стабильно работаем с 2022 года",
  },
  {
    id: 3,
    image: WindowsIcon,
    title: "Глубокое знание всех типов окон",
    text: "Моем любые конструкции — от стеклопакетов до панорамных фасадов",
  },
  {
    id: 4,
    image: CarIcon,
    title: "Бесплатный выезд",
    text: "Выезжаем по Санкт-Петербургу и ЛО без доплат",
  },
  {
    id: 5,
    image: GuaranteeIcon,
    title: "Гарантия качества",
    text: "Исправим, если не устроит результат",
  },
  {
    id: 6,
    image: FlashIcon,
    title: "Работаем быстро и качественно",
    text: "Чистим окна без разводов в кратчайшие сроки",
  },
  {
    id: 7,
    image: ClientsIcon,
    title: "Высокая клиенториентированность",
    text: "Всегда идём навстречу клиенту и учитываем пожелания",
  },
];
