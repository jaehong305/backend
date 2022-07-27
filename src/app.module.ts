import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteModule } from './apis/site/site.module';

@Module({
  imports: [
    SiteModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'app',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
