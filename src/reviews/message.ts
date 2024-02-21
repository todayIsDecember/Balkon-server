import { CreateReviewDto } from './dto/createReviewDto';

export const generateMessage = (dto: CreateReviewDto): string => {
	switch (dto.raiting) {
		case 1:
			return (
				`⚡ У вас 1 новий відгук \n` +
				`\n` +
				`😡 Дуже погано\n` +
				`\n` +
				`📝 ${dto.description}\n` +
				`\n` +
				`⭐ ${dto.raiting} / 5`
			);
		case 2:
			return (
				`⚡ У вас 1 новий відгук \n` +
				`\n` +
				`😕 Погано\n` +
				`\n` +
				`📝 ${dto.description}\n` +
				`\n` +
				`⭐ ${dto.raiting} / 5`
			);
		case 3:
			return (
				`⚡ У вас 1 новий відгук \n` +
				`\n` +
				`😐 Нормально\n` +
				`\n` +
				`📝 ${dto.description}\n` +
				`\n` +
				`⭐ ${dto.raiting} / 5`
			);
		case 4:
			return (
				`⚡ У вас 1 новий відгук \n` +
				`\n` +
				`😊 Добре\n` +
				`\n` +
				`📝 ${dto.description}\n` +
				`\n` +
				`⭐ ${dto.raiting} / 5`
			);
		case 5:
			return (
				`⚡ У вас 1 новий відгук \n` +
				`\n` +
				`😍 Чудово\n` +
				`\n` +
				`📝 ${dto.description}\n` +
				`\n` +
				`⭐ ${dto.raiting} / 5`
			);
	}
};
