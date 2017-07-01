import { Component } from "@angular/core";

@Component({
    selector: "read-home",
    template: `
        <h1>我的书单</h1>
        <h2>正在读...</h2>
        <reading></reading>
        <h2>想读...</h2>
        <to-read></to-read>
        <h2>最新推荐</h2>
        <read-command></read-command>
    `
})

export class HomeComponent {}