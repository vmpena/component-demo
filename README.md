# ComponentDemos

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.

## Paging Component
The component used to page the incoming data is Michael Bromley's [ng2-pagination](http://http://michaelbromley.github.io/ng2-pagination//). I had to change the ChangeDetectionStrategy to Default however:

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
```
## Configuring angular-cli.json 
Since this project was created with the Angular CLI, you need to add a reference to any third party scripts in the angular-cli.json file. In the case of ng2-pagination, be sure to use ng2-pagination-bundle.js as shown below and not ng2-pagination.js. 
```
 "scripts": [
        "../node_modules/ng2-pagination/dist/ng2-pagination-bundle.js"
      ]
      ```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
