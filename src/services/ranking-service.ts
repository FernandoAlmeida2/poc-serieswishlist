import rankingRepository, { CountByGenreResult } from "../repositories/ranking-repository.js";

async function rankingByGenre(): Promise<CountByGenreResult[]> {
    const {rows: ranking} = await rankingRepository.countByGenre();
    return ranking;
}

const rankingService = {
    rankingByGenre,
};

export default rankingService;