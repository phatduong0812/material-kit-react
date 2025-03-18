import { UserProps } from 'src/sections/user/user-table-row';
import pb from './pocketbase';

const dataApi = {
    async getServiceList(type: string): Promise<UserProps[]> {
        try {
            const records = await pb.collection(dataApi.getDataTypeFromTableName(type)).getFullList();
    
            return records.map((record) => ({
                id: record.id,
                name: record.name,
                price: String(record.price),
                category: record.category_id,
                clickCount: Number(record.clicked),
                status: record.status,
                lastUpdated: record.updated,
                time: record.time_in_minutes,
            }));
        } catch (error) {
            console.error('Error fetching services:', error);
            throw error;
        }
    },
    
    async getServiceById(id: string, type: string): Promise<UserProps> {
        try {
            const record = await pb.collection(dataApi.getDataTypeFromTableName(type)).getFirstListItem(`id="${id}"`);
            return {
                id: record.id,
                name: record.name,
                price: String(record.price),
                category: record.category_id,
                clickCount: Number(record.clicked),
                status: record.status,
                lastUpdated: record.updated,
                time: record.time_in_minutes,
            };
        } catch (error) {
            console.error('Error fetching service by field:', error);
            throw error;
        }
    },

    getDataTypeFromTableName(tableNameKey: string): string {
        switch (tableNameKey) {
          case 'Services':
            return 'service';
          case 'Vouchers':
            return 'voucher';
          default:
            throw new Error(`Invalid table name: ${tableNameKey}`);
        }
    }
}

export default dataApi;