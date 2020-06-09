import {Season} from "../models";

export class DateUtils {
    /**
     * WINTER
     * Months December to February
     *
     * SPRING
     * Months March to May
     *
     * SUMMER
     * Months June to August
     *
     * FALL
     * Months September to November
     */
    public static getSeason(): Season {
        const month = new Date().getMonth() + 1;
        switch (month) {
            case 12:
            case 1:
            case 2:
                return Season.WINTER;
            case 9:
            case 10:
            case 11:
                return Season.FALL;
            case 6:
            case 7:
            case 8:
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