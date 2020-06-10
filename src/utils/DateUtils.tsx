import {Season} from "../models";

export class DateUtils {
    public static getSeason(): Season {
        const month = new Date().getMonth() + 1;
        switch (month) {
            case 1:
            case 2:
            case 3:
                return Season.WINTER;
            case 10:
            case 11:
            case 12:
                return Season.FALL;
            case 7:
            case 8:
            case 9:
                return Season.SUMMER;
            default:
                return Season.SPRING
        }
    }

    public static getSeasonYear(): number {
        return new Date().getFullYear();
    }

    public static getNextSeason(): Season {
        const season = this.getSeason();
        switch (season) {
            case Season.FALL:
                return Season.WINTER;
            case Season.SUMMER:
                return Season.FALL;
            case Season.SPRING:
                return Season.SUMMER;
            default:
                return Season.SPRING;
        }
    }

    public static getNextSeasonYear() {
        const season = this.getSeason();
        if (season === Season.WINTER) {
            return this.getSeasonYear() + 1;
        }

        return this.getSeasonYear();
    }
}