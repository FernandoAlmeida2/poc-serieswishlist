import rankingRepository, {
  CountByGenreResult,
  CountByPlatformResult,
} from "../repositories/ranking-repository.js";

async function rankingByGenre(): Promise<CountByGenreResult[]> {
  const { rows: ranking } = await rankingRepository.countByGenre();
  return ranking;
}

async function rankingByPlatform(): Promise<CountByPlatformResult[]> {
  const { rows: ranking } = await rankingRepository.countByPlatform();
  return ranking;
}

const rankingService = {
  rankingByGenre,
  rankingByPlatform,
};

export default rankingService;
